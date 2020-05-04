// Initializes the `UploadMedia` service on path `/media`
import { ServiceAddons } from '@feathersjs/feathers'
import { Application } from '../../declarations'
import { UploadMedia } from './upload-media.class'
import hooks from './upload-media.hooks'
import express from 'express'
import multer from 'multer'
import StorageProvider from '../../storage/storageprovider'
import blobService from 'feathers-blob'
import { v1 as uuidv1 } from 'uuid'
const multipartMiddleware = multer()

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'media': UploadMedia & ServiceAddons<any>
  }
}

export default (app: Application): void => {
  const provider = new StorageProvider()

  // Initialize our service with any options it requires
  app.use('/media',
    multipartMiddleware.fields([{ name: 'file' }, { name: 'thumbnail' }]),
    (req: express.Request, res: express.Response, next: express.NextFunction) => {
      if (req?.feathers) {
        req.feathers.file = (req as any).files.file ? (req as any).files.file[0] : null
        console.log('req.feathers.file ', req.feathers.file)
        req.feathers.body = (req as any).body
        req.feathers.body.fileId = uuidv1()
        req.feathers.mime_type = req.feathers.file.mimetype
        req.feathers.storageProvider = provider
        req.feathers.thumbnail = (req as any).files.thumbnail ? (req as any).files.thumbnail[0] : null
        req.feathers.uploadPath = req.feathers.body.fileId
        next()
      }
    },
    blobService({ Model: provider.getStorage() })
  )

  // Get our initialized service so that we can register hooks
  const service = app.service('media')

  service.hooks(hooks)
}
