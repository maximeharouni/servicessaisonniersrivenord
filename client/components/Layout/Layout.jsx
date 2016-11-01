import React from 'react'

import Navigation from '../Navigation'
import Header from '../Header'
import Footer from '../Footer'
import './Layout.scss'

class Layout extends React.Component {
  render () {
    return (
      <div className='layout'>
        <Navigation />
        <div className='page-content'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
