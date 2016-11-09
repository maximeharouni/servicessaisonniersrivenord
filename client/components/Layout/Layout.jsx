import React from 'react'
import classNames from 'classnames'

import Navigation from '../Navigation'
import Header from '../Header'
import Footer from '../Footer'
import './Layout.scss'

class Layout extends React.Component {
  static contextTypes = {
   router: React.PropTypes.any.isRequired
  };
  
  render () {
    let c = classNames({
      'page-content': true,
      'page-content--home': this.context.router.isActive('/home', true) || this.context.router.isActive('/', true)
    })
    return (
      <div className='layout'>
        <Navigation />
        <div className={c}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
