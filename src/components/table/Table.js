import {ExcelComponet} from '@core/ExcelComponent'
import {createTable} from './table.template'
import {TableSelection} from './TableSelection'
import {resizeHandler} from './talbe.resize'
import {shouldResize} from './table.functions'
import {isCell} from './table.functions'
import {matrix} from './table.functions'
import {$} from '@core/dom'


export class Table extends ExcelComponet {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable(50)
  }

  prepare() {
    this.selection = new TableSelection()
  }

  init() {
    super.init()

    const $cell = this.$root.find('[data-id="0:0"]')
    this.selection.select($cell)
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    }
    if (isCell(event)) {
      const $target = $(event.target)

      if (event.shiftKey) {
        const $cells = matrix($target, this.selection.current)
            .map(id => this.$root.find(`[data-id="${id}"]`))
            
        this.selection.selectGroup($cells)
      } else {
        this.selection.select($target)
      }
    }
  }
}