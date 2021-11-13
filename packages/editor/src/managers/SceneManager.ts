import i18n from 'i18next'
import {
  PerspectiveCamera,
  Raycaster,
  Vector2,
  Vector3,
  AudioListener,
  PropertyBinding,
  WebGLInfo,
  WebGLRenderer,
  MeshBasicMaterial,
  MeshNormalMaterial
} from 'three'
import EditorInfiniteGridHelper from '../classes/EditorInfiniteGridHelper'
import SceneNode from '../nodes/SceneNode'
import ThumbnailRenderer from '../renderer/ThumbnailRenderer'
import { generateImageFileThumbnail, generateVideoFileThumbnail, getCanvasBlob } from '../functions/thumbnails'
import { LoadGLTF } from '@xrengine/engine/src/assets/functions/LoadGLTF'
import EditorEvents from '../constants/EditorEvents'
import { CommandManager } from './CommandManager'
import EditorCommands from '../constants/EditorCommands'
import getIntersectingNode from '../functions/getIntersectingNode'
import cloneObject3D from '@xrengine/engine/src/scene/functions/cloneObject3D'
import isEmptyObject from '../functions/isEmptyObject'
import { ControlManager } from './ControlManager'
import resizeShadowCameraFrustum from '../functions/resizeShadowCameraFrustum'
import { Engine } from '@xrengine/engine/src/ecs/classes/Engine'
import { GLTFExporter } from '@xrengine/engine/src/assets/loaders/gltf/GLTFExporter'
import { RethrownError } from '@xrengine/client-core/src/util/errors'
import TransformGizmo from '@xrengine/engine/src/scene/classes/TransformGizmo'
import PostProcessingNode from '../nodes/PostProcessingNode'
import { NodeManager } from './NodeManager'
import { SceneJson } from '@xrengine/common/src/interfaces/SceneInterface'
import { configureEffectComposer } from '@xrengine/engine/src/renderer/functions/configureEffectComposer'
import makeRenderer from '../renderer/makeRenderer'
import ScenePreviewCameraNode from '../nodes/ScenePreviewCameraNode'
import { RenderModes, RenderModesType } from '../constants/RenderModes'
import { EngineRenderer } from '@xrengine/engine/src/renderer/WebGLRendererSystem'
import { World } from '@xrengine/engine/src/ecs/classes/World'
import { System } from '@xrengine/engine/src/ecs/classes/System'
import { Effects } from '@xrengine/engine/src/scene/classes/PostProcessing'
import { addComponent } from '@xrengine/engine/src/ecs/functions/ComponentFunctions'
import { createEntity } from '@xrengine/engine/src/ecs/functions/EntityFunctions'
import { Object3DComponent } from '@xrengine/engine/src/scene/components/Object3DComponent'
import { TransformGizmoComponent } from '@xrengine/engine/src/scene/components/TransformGizmo'

export class SceneManager {
  static instance: SceneManager = new SceneManager()

  static DefaultExportOptions = {
    combineMeshes: true,
    removeUnusedObjects: true
  }

  sceneModified: boolean
  audioListener: AudioListener
  grid: EditorInfiniteGridHelper
  raycaster: Raycaster
  centerScreenSpace: Vector2
  thumbnailRenderer: ThumbnailRenderer
  disableUpdate: boolean
  transformGizmo: TransformGizmo
  postProcessingNode: PostProcessingNode
  onUpdateStats: (info: WebGLInfo) => void
  canvas: HTMLCanvasElement
  screenshotRenderer: WebGLRenderer
  renderMode: RenderModesType

  async initializeScene(projectFile: SceneJson): Promise<Error[] | void> {
    this.dispose()

    this.raycaster = new Raycaster()

    this.audioListener = new AudioListener()
    Engine.camera.add(this.audioListener)

    this.centerScreenSpace = new Vector2()
    this.disableUpdate = true

    // Empty existing scene
    if (Engine.scene) {
      Engine.scene.traverse((child: any) => {
        if (child.isNode) {
          child.onRemove()
          if (!NodeManager.instance.remove(child)) {
            throw new Error(i18n.t('editor:errors.removeObject'))
          }
        }

        if (child.geometry) {
          child.geometry.dispose()
        }

        if (child.material) {
          if (child.material.length) {
            for (let i = 0; i < child.material.length; ++i) {
              child.material[i].dispose()
            }
          } else {
            child.material.dispose()
          }
        }
      })

      Engine.scene = null
      Engine.renderer.renderLists.dispose()
      Engine.renderer = null
    }

    NodeManager.instance.nodes = [Engine.scene]

    // getting scene data
    const [scene, error] = await SceneNode.loadProject(projectFile)
    if (scene === null) throw new Error('Scene data is null, please create a new scene.')

    Engine.camera.position.set(0, 5, 10)
    Engine.camera.lookAt(new Vector3())

    this.grid = new EditorInfiniteGridHelper()
    this.transformGizmo = new TransformGizmo()

    const entity = createEntity()
    addComponent(entity, Object3DComponent, { value: this.transformGizmo })
    addComponent(entity, TransformGizmoComponent, {})

    Engine.scene.add(Engine.camera)
    Engine.scene.add(this.grid)
    Engine.scene.add(this.transformGizmo)

    this.sceneModified = false

    if (error) return error
  }

  /**
   * Function onEmitSceneModified called when scene get modified.
   *
   * @author Robert Long
   */
  onEmitSceneModified() {
    this.sceneModified = true
  }

  /**
   * Function initializeRenderer used to render canvas.
   *
   * @author Robert Long
   * @param  {any} canvas [ contains canvas data ]
   */
  initializeRenderer(canvas: HTMLCanvasElement): void {
    if (Engine.renderer) return

    try {
      this.canvas = canvas
      const renderer = makeRenderer(
        canvas.parentElement.parentElement.offsetWidth,
        canvas.parentElement.parentElement.offsetHeight,
        { canvas }
      )
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.info.autoReset = false
      Engine.renderer = renderer

      this.screenshotRenderer = makeRenderer(1920, 1080)
      this.thumbnailRenderer = new ThumbnailRenderer()
      this.disableUpdate = false

      ControlManager.instance.initControls()
      new EngineRenderer({ canvas, enabled: true })
      Engine.engineTimer.start()
      this.grid.setSize(ControlManager.instance.editorControls.translationSnap)

      /** @todo */
      // Cascaded shadow maps
      // const csm = new CSM({
      //   cascades: 4,
      //   lightIntensity: 1,
      //   shadowMapSize: 2048,
      //   maxFar: 100,
      //   camera: camera,
      //   parent: Engine.scene
      // });
      // csm.fade = true;
      // Engine.csm = csm;

      Engine.scene.traverse((node: any) => {
        if (!node.isNode) return

        if (node.name === 'post processing') this.postProcessingNode = node
        node.onChange()
      })

      configureEffectComposer(this.postProcessingNode?.postProcessingOptions)
      CommandManager.instance.addListener(EditorEvents.SELECTION_CHANGED.toString(), this.updateOutlinePassSelection)
      window.addEventListener('resize', this.onResize)

      CommandManager.instance.emitEvent(EditorEvents.RENDERER_INITIALIZED)
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * Function takeScreenshot used for taking screenshots.
   *
   * @author Robert Long
   * @param  {any}  width
   * @param  {any}  height
   * @return {Promise}        [generated screenshot according to height and width]
   */
  async takeScreenshot(width?: number, height?: number) {
    const { screenshotRenderer } = this
    const sceneNode = Engine.scene as any as SceneNode
    const originalRenderer = Engine.renderer
    Engine.renderer = screenshotRenderer
    this.disableUpdate = true
    let scenePreviewCamera = sceneNode.findNodeByType(ScenePreviewCameraNode)
    if (!scenePreviewCamera) {
      scenePreviewCamera = new ScenePreviewCameraNode()
      Engine.camera.matrix.decompose(scenePreviewCamera.position, scenePreviewCamera.rotation, scenePreviewCamera.scale)
      CommandManager.instance.executeCommandWithHistory(EditorCommands.ADD_OBJECTS, [scenePreviewCamera])
    }
    const prevAspect = scenePreviewCamera.aspect
    scenePreviewCamera.aspect = width / height
    scenePreviewCamera.updateProjectionMatrix()
    scenePreviewCamera.layers.disable(1)
    screenshotRenderer.setSize(width, height, true)
    screenshotRenderer.render(Engine.scene as any, scenePreviewCamera)
    const blob = await getCanvasBlob(screenshotRenderer.domElement)
    scenePreviewCamera.aspect = prevAspect
    scenePreviewCamera.updateProjectionMatrix()
    scenePreviewCamera.layers.enable(1)
    this.disableUpdate = false
    Engine.renderer = originalRenderer
    return blob
  }

  enableShadows(status: boolean): void {
    Engine.renderer.shadowMap.enabled = status
    Engine.scene.traverse((object: any) => {
      if (object.setShadowsEnabled) {
        object.setShadowsEnabled(this.enableShadows)
      }
    })
  }

  changeRenderMode(mode: RenderModesType) {
    this.renderMode = mode

    const passes = Engine.effectComposer?.passes.filter((p) => p.name === 'RenderPass')
    const renderPass = passes ? passes[0] : undefined

    if (!renderPass) return

    switch (mode) {
      case RenderModes.UNLIT:
        this.enableShadows(false)
        renderPass.overrideMaterial = null
        break
      case RenderModes.LIT:
        this.enableShadows(false)
        renderPass.overrideMaterial = null
        break
      case RenderModes.SHADOW:
        this.enableShadows(true)
        renderPass.overrideMaterial = null
        break
      case RenderModes.WIREFRAME:
        this.enableShadows(false)
        renderPass.overrideMaterial = new MeshBasicMaterial({
          wireframe: true
        })
        break
      case RenderModes.NORMALS:
        this.enableShadows(false)
        renderPass.overrideMaterial = new MeshNormalMaterial()
        break
    }

    CommandManager.instance.emitEvent(EditorEvents.RENDER_MODE_CHANGED)
  }

  /**
   * Function generateFileThumbnail used to create thumbnail from audio as well video file.
   *
   * @author Robert Long
   * @param  {any}  file
   * @param  {any}  width
   * @param  {any}  height
   * @return {Promise}        [generated thumbnail data as blob]
   */
  async generateFileThumbnail(file, width?: number, height?: number): Promise<any> {
    const url = URL.createObjectURL(file)

    let blob

    const fileName = file.name.toLowerCase()
    if (fileName.endsWith('.glb')) {
      const { scene } = await LoadGLTF(url)

      blob = await this.thumbnailRenderer.generateThumbnail(scene, width, height)
    } else if (['.png', '.jpg', '.jpeg', '.gif', '.webp'].some((ext) => fileName.endsWith(ext))) {
      blob = await generateImageFileThumbnail(file)
    } else if (file.name.toLowerCase().endsWith('.mp4')) {
      blob = await generateVideoFileThumbnail(file)
    }

    URL.revokeObjectURL(url)

    if (!blob) {
      throw new Error(i18n.t('editor:errors.fileTypeNotSupported', { name: file.name }))
    }
    return blob
  }

  /**
   * Function onResize event handler for resize containers.
   *
   * @author Robert Long
   */
  onResize = () => {
    ControlManager.instance.inputManager.onResize()
    const camera = Engine.camera as PerspectiveCamera
    const canvas = this.canvas
    const containerEl = canvas.parentElement.parentElement
    camera.aspect = containerEl.offsetWidth / containerEl.offsetHeight
    camera.updateProjectionMatrix()
    Engine.renderer.setSize(containerEl.offsetWidth, containerEl.offsetHeight, false)
    // Engine.csm.updateFrustums();

    configureEffectComposer(this.postProcessingNode?.postProcessingOptions)
    CommandManager.instance.emit('resize')
  }

  /**
   * Function getSpawnPosition provides the postion of object inside scene.
   *
   * @author Robert Long
   * @param target
   * @return {any}        [Spwan position]
   */
  getSpawnPosition(target) {
    return this.getScreenSpaceSpawnPosition(this.centerScreenSpace, target)
  }

  /**
   * Function reparentToSceneAtCursorPosition used to reparent scene at cursor position.
   *
   * @author Robert Long
   * @param objects
   * @param mousePos
   */
  reparentToSceneAtCursorPosition(objects, mousePos) {
    const newPosition = new Vector3()
    this.getCursorSpawnPosition(mousePos, newPosition)
    CommandManager.instance.executeCommand(EditorCommands.REPARENT, objects, {
      parents: Engine.scene,
      positions: newPosition
    })
  }

  /**
   * Function provides the cursor spawn position.
   *
   * @author Robert Long
   * @param mousePos
   * @param target
   * @returns
   */
  getCursorSpawnPosition(mousePos, target) {
    const rect = this.canvas.getBoundingClientRect()
    const position = new Vector2()
    position.x = ((mousePos.x - rect.left) / rect.width) * 2 - 1
    position.y = ((mousePos.y - rect.top) / rect.height) * -2 + 1
    return this.getScreenSpaceSpawnPosition(position, target)
  }

  /**
   * Function provides the screen space spawn position.
   *
   * @author Robert Long
   * @param screenSpacePosition
   * @param target
   */
  getScreenSpaceSpawnPosition(screenSpacePosition, target) {
    this.raycaster.setFromCamera(screenSpacePosition, Engine.camera)
    const results = this.raycaster.intersectObject(Engine.scene as any, true)
    const result = getIntersectingNode(results, Engine.scene)

    if (result && result.distance < 1000) {
      target.copy(result.point)
    } else {
      this.raycaster.ray.at(20, target)
    }

    if (ControlManager.instance.editorControls.shouldSnap()) {
      const translationSnap = ControlManager.instance.editorControls.translationSnap

      target.set(
        Math.round(target.x / translationSnap) * translationSnap,
        Math.round(target.y / translationSnap) * translationSnap,
        Math.round(target.z / translationSnap) * translationSnap
      )
    }
  }

  /**
   * Function exportScene used to export scene.
   *
   * @author Robert Long
   * @param  {any}  signal       [show the Network status]
   * @param  {Object}  [options={}]
   * @return {Promise}              [scene data as object]
   */
  async exportScene(options = {}) {
    const { combineMeshes, removeUnusedObjects } = Object.assign({}, SceneManager.DefaultExportOptions, options)

    CommandManager.instance.executeCommand(EditorCommands.REPLACE_SELECTION, [])

    const scene = Engine.scene

    const clonedScene = cloneObject3D(scene, true)
    const animations = clonedScene.getAnimationClips()

    for (const clip of animations) {
      for (const track of clip.tracks) {
        const { nodeName: uuid } = PropertyBinding.parseTrackName(track.name)

        const object = clonedScene.getObjectByProperty('uuid', uuid)

        if (!object) {
          const originalSceneObject = scene.getObjectByProperty('uuid', uuid)

          if (originalSceneObject) {
            console.log(`Couldn't find object with uuid: "${uuid}" in cloned scene but was found in original scene!`)
          } else {
            console.log(`Couldn't find object with uuid: "${uuid}" in cloned or original scene!`)
          }
        }
      }
    }

    const exportContext = { animations }

    clonedScene.prepareForExport(exportContext)

    if (combineMeshes) {
      await clonedScene.combineMeshes()
    }

    if (removeUnusedObjects) {
      clonedScene.removeUnusedObjects()
    }

    const exporter = new GLTFExporter({
      mode: 'glb',
      onlyVisible: false,
      includeCustomExtensions: true,
      animations
    })

    let chunks

    try {
      chunks = await exporter.exportChunks(clonedScene)
    } catch (error) {
      throw new RethrownError(`Error exporting scene`, error)
    }

    const json = chunks.json

    const nodeDefs = json.nodes
    if (nodeDefs) {
      const uuidToIndexMap = {}

      for (let i = 0; i < nodeDefs.length; i++) {
        const nodeDef = nodeDefs[i]

        if (nodeDef.extras && nodeDef.extras.editor_uuid) {
          uuidToIndexMap[nodeDef.extras.editor_uuid] = i
          delete nodeDef.extras.editor_uuid

          if (isEmptyObject(nodeDef.extras)) {
            delete nodeDef.extras
          }
        }
      }
    }

    try {
      const glbBlob = await exporter.exportGLBBlob(chunks)

      return { glbBlob, chunks }
    } catch (error) {
      throw new RethrownError('Error creating glb blob', error)
    }
  }

  /**
   * Function update used to update components used in editor.
   *
   * @author Robert Long
   */
  update = (delta: number, time: number) => {
    if (this.disableUpdate) return

    Engine.scene.traverse((node: any) => {
      if (Engine.renderer.shadowMap.enabled && node.isDirectionalLight) {
        resizeShadowCameraFrustum(node, Engine.scene)
      }

      if (node.isNode) {
        node.onUpdate(delta, time)
      }
    })

    ControlManager.instance.update(delta, time)

    // Engine.csm.update();
    Engine.effectComposer
      ? Engine.effectComposer.render(delta)
      : Engine.renderer.render(Engine.scene as any, Engine.camera)

    if (this.onUpdateStats) {
      Engine.renderer.info.reset()
      const renderStat = Engine.renderer.info.render as any
      renderStat.fps = 1 / delta
      renderStat.frameTime = delta * 1000
      this.onUpdateStats(Engine.renderer.info)
    }
  }

  updateOutlinePassSelection(): any[] {
    if (!Engine.effectComposer || !Engine.effectComposer[Effects.OutlineEffect]) return

    const meshes = []
    for (let i = 0; i < CommandManager.instance.selectedTransformRoots.length; i++) {
      CommandManager.instance.selectedTransformRoots[i].traverse((child) => {
        if (
          !child.disableOutline &&
          !child.isHelper &&
          (child.isMesh || child.isLine || child.isSprite || child.isPoints)
        ) {
          meshes.push(child)
        }
      })
    }

    Engine.effectComposer[Effects.OutlineEffect].selection.set(meshes)
    return meshes
  }

  dispose() {
    Engine.renderer?.dispose()
    this.screenshotRenderer?.dispose()
    Engine.effectComposer?.dispose()
    CommandManager.instance.removeListener(EditorEvents.SELECTION_CHANGED.toString(), this.updateOutlinePassSelection)
  }
}

type EngineRendererProps = {
  canvas: HTMLCanvasElement
  enabled: boolean
}

// TODO: Probably moved to engine package or will be replaced by already available WebGLRenderSystem
export default async function EditorRendererSystem(world: World, props: EngineRendererProps): Promise<System> {
  // await EngineRenderer.instance.loadGraphicsSettingsFromStorage()
  // EngineRenderer.instance.dispatchSettingsChangeEvent()

  return () => {
    if (props.enabled) SceneManager.instance.update(world.delta, world.elapsedTime)
  }
}
