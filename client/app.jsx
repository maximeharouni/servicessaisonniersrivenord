import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router'

import Layout from './components/Layout'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Info from './pages/Info'
import Services from './pages/Services'
import Installation from './pages/Installation'
import Vente from './pages/Vente'

// Redux
import configureStore from './store'

const store = configureStore()


import './styles/app.scss'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home} />
        <Route path='home' component={Home} />
        <Route path='about' component={About} />
        <Route path='info' component={Info} />
        <Route path='services' component={Services} />
        <Route path='installation' component={Installation} />
        <Route path='vente' component={Vente} />
      </Route>
    </Router>
  </Provider>,
document.getElementById('app'))
