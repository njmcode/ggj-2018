const DEBUG = false
/**
 * Basic event bus/dispatcher.
 */
class Emitter {
  constructor() {
    this.events = {}
  }

  bind(id, func, ctx) {
    if (!(id in this.events)) {
      DEBUG && console.log('Emitter:new event', id)
      this.events[id] = []
    }
    this.events[id].push(func.bind(ctx))
    return func
  }

  unbind(id, func) {
    if (!(id in this.events)) return false

    const idx = this.events[id].indexOf(func)
    if (idx === -1) return false

    this.events[id][idx] = undefined
  }

  dispatch(id, ...params) {
    if (!(id in this.events)) {
      DEBUG && console.warn('Emitter:no event found', id)
      return false
    }
    DEBUG && console.log('Emitter:dispatch', id, ...params)
    for (let i = 0, ln = this.events[id].length; i < ln; i++) {
      this.events[id][i](...params)
    }
  }

  unbindAll() {
    this.events = {}
  }
}

export default Emitter
