import {ExcelCompoenet} from '@core/ExcelComponent'
import {createTable} from './table.template'

export class Table extends ExcelCompoenet {
  static className = 'excel__table'

  toHTML() {
    return createTable(50)
  }
}