import {defaultTitle} from '@/constants'
import {$} from '@/core/dom'
import {debounce} from '@/core/utils'
import {changeTitle} from '@/redux/actions'
import {ExcelComponet} from '@core/ExcelComponent'

export class Header extends ExcelComponet {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options
    })
  }

  prepare() {
    this.onInput = debounce(this.onInput)
  }

  toHTML() {
    const title = this.store.getState().title || defaultTitle
    return `
      <input type="text" class="input" value="${title}">

      <div>

        <div class="button">
          <i class="material-icons">exit_to_app</i>
        </div>

        <div class="button">
          <i class="material-icons">delete</i>
        </div>

      </div>
    `
  }

  onInput(event) {
    const $target = $(event.target)
    this.$dispatch(changeTitle($target.text()))
  }
}