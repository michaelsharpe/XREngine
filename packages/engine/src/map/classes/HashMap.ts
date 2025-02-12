// TODO(perf) would something like megahash help?
// import HashMap from 'megahash'

import { ITuple } from '../types'

interface Options<Value> {
  defaultValue?: Value
}

export default class HashMap<Key extends ITuple, Value> {
  _size: number
  map: {
    [key: string]: Value
  }
  defaultValue: Value

  constructor(iterable: Iterable<[Key, Value]> = [], options: Options<Value> = {}) {
    this.map = {}
    this._size = 0
    for (const [key, value] of iterable) {
      this.map[key.hash] = value
    }
    if (typeof options.defaultValue !== 'undefined') {
      this.defaultValue = options.defaultValue
    }
  }

  set(key: Key, value: Value) {
    this.map[key.hash] = value
    this._size++
    return this
  }

  has(key: Key) {
    return this.map.hasOwnProperty(key.hash)
  }

  get(key: Key) {
    if (this.has(key)) {
      return this.map[key.hash]
    } else {
      return this.defaultValue
    }
  }

  delete(key: Key) {
    const has = this.has(key)
    delete this.map[key.hash]
    this._size--
    return has
  }

  *keyHashes() {
    for (const key in this.map) {
      yield key
    }
  }

  *values() {
    for (const key in this.map) {
      yield this.map[key]
    }
  }

  clear() {
    this.map = {}
    this._size = 0
  }

  get size() {
    return this._size
  }
}
