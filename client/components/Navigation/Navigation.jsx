import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

import NavigationItem from './NavigationItem'

import './Navigation.scss'
import navigation_data from './Navigation.json'

class Navigation extends React.Component {
  static contextTypes = {
   router: React.PropTypes.any.isRequired
  };

  constructor () {
    super()
    this.state = {
      isOpen: true
    }
  }
  renderNavigation (i, n) {
    return (
      <NavigationItem data={i} key={n} />
    )
  }

  render () {
    let c = classNames({
      'navigation': true,
      'navigation--home': this.context.router.isActive('/home', true) || this.context.router.isActive('/', true)
    })
    console.log(this.context.router.isActive('/home', true))
    return (
      <div className={c} role='navigation'>
        <div className='container'>
          <ul>
            { navigation_data.map(this.renderNavigation) }
          </ul>
        </div>
      </div>
    )
  }
}

export default Navigation
