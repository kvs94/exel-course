// import {Excel} from './components/excel/Excel'
// import {Formula} from './components/formula/Formula'
// import {Header} from './components/header/Header'
// import {Table} from './components/table/Table'
// import {Toolbar} from './components/toolbar/Toolbar'
// import {createStore} from './core/createStore'
// import {rootReducer} from './redux/rootReducer'
// import {initialState} from './redux/initialState'
// import {storage, debounce} from '@core/utils'

import {Router} from './core/routes/Router'
import {DashboardPage} from './pages/DashboardPage'
import {ExcelPage} from './pages/ExcelPage'
import './scss/index.scss'

new Router('#app', {
  dashboard: DashboardPage,
  excel: ExcelPage
})