export class Emitter {
  constructor() {
    this.liteners = {}
  }

  emit(event, ...args) {
    if (!Array.isArray(this.liteners[event])) {
      return false
    }

    this.liteners[event].forEach(listener => {
      listener(...args)
    })

    return true
  }

  subscribe(event, fn) {
    this.liteners[event] = this.liteners[event] || []
    this.liteners[event].push(fn)

    return () => {
      this.listeners[event] = this.listeners[event]
          .filter(listener => listener !== fn)
    }
  }
}