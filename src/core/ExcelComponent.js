import { DomListener } from "@core/DomListener"

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    // проверка на || для EsLint'а
    this.name = options.name || "'component'"
  }

  // Returns component template
  toHTML() {
    return ""
  }

  init() {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
  }
}
