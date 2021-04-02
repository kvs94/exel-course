import {Excel} from './components/excel/Excel'
import {Formula} from './components/formula/Formula'
import {Header} from './components/header/Header'
import {Table} from './components/table/Table'
import {Toolbar} from './components/toolbar/Toolbar'
import {createStore} from './core/createStore'
import {rootReducer} from './redux/rootReducer'
import {initialState} from './redux/initialState'
import {storage} from '@core/utils'

import './scss/index.scss'

const store = createStore(rootReducer, initialState)

store.subscribe(state => {
  storage('excel-state', state)
})

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
  store
})

excel.render()