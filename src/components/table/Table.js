import { ExcelComponent } from "@core/ExcelComponent"
import { createTable } from "./table.template"
import {$} from '@core/dom'

export class Table extends ExcelComponent {
  static className = "excel__table"

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'mouseup']
    })
  }

  toHTML() {
    return createTable(25)
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target)
      const $parent = $resizer.closest("[data-type='resizable']")
      const coords = $parent.getCoords()
      const type = $resizer.data.resize

      const cells = this.$root.findAll(`[data-col="${$parent.data.col}"]`)

      document.onmousemove = e => {
        if (type === 'col') {
          const delta = e.pageX - coords.right
          const value = coords.width + delta
          $parent.$el.style.width = value + 'px'
          cells.forEach(item => item.style.width = value + 'px')
        } else {
          const delta = e.pageY - coords.bottom
          const value = coords.height + delta
          $parent.$el.style.height = value + 'px'
        }
      }
      document.onmouseup = () => {
        document.onmousemove = null
      }
    }
  }

  onMouseup() {}
}


//const resizeType = event.target.dataset.resize
//if (resizeType === 'col') {
//  const delta = e.pageX - coords.right
//  const value = coords.width + delta
//  $parent.$el.style.width = value + 'px'

//  const colIndex = $parent.$el.dataset.col
//  const row = document.querySelectorAll(`[data-col='${colIndex}']`)

//  row.forEach(item => {
//    item.style.width = value + 'px'
//  })
//} else {
//  const delta = e.pageY - coords.top
//  $parent.$el.style.height = delta + 'px'
//}
