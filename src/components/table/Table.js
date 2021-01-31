import {ExcelCompoenet} from '@core/ExcelComponent'
import {shouldResize} from './table.functions'
import {createTable} from './table.template'
import {resizeHandler} from './talbe.resize'


export class Table extends ExcelCompoenet {
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

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    }
  }
}