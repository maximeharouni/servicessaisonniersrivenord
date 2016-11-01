import React from 'react'
import { Link } from 'react-router'

import './Header.scss'

class Header extends React.Component {
  onClick () {
    console.log('test')
  }

  render () {
    return (
      <div className='header'>
        <div className=''>
          <div className='header__overlay'>
            <div className='header__titles'>
              <h1 className='header__brand'>Services saisonniers <br />Rive Nord</h1>
              <h2 className='header__services'>Installation d'abris d'autos Grand Montréal et rive Nord</h2>
            </div>
            <div className='header__button'>
              <Link to='/services' onClick={this.onClick.bind(this)}>
                <h2>Commander</h2>
              </Link>
            </div>
          </div>
          <img className='header__banner' src='images/tempo_banner.png' />
        </div>
      </div>
    )
  }
}

export default Header
