export class Emitter {
  constructor() {
    this.listeners = {}
  }

  // Уведомляем слушателей, если они есть
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event]))
      return false

    this.listeners[event].forEach(listener => {
      listener(...args)
    })

    return true
  }

  // Добавляем нового слушателя
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)

    // Удаляем слушателя
    return () => {
      this.listeners[event] =
          this.listeners[event].filter(listener => listener !== fn)
    }
  }
}