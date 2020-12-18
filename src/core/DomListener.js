import { capitalize } from "./utils"

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) throw new Error("No $root provided for DomListener")

    this.$root = $root
    this.listeners = listeners
  }

  optDomListeners() {

  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      if (!this[method]) {
        throw new Error(
            `Method ${method} is not implemented in ${this.name} component`
        )
      }
      // -------
      this[method] = this[method].bind(this)
      // Тоже самое что и addEventListener
      this.$root.on(listener, this[method])
    })
  }

  removeDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      // Тоже самое что и removeEventListener
      this.$root.off(listener, this[method])
    })
  }
}

// Move to utils or rewrite
function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
