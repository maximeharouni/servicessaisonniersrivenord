import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

import './Footer.scss'

class Footer extends React.Component {
  static contextTypes = {
   router: React.PropTypes.any.isRequired
  };

  render () {
    let c = classNames({
      'footer': true,
      'footer--home': this.context.router.isActive('/home', true) || this.context.router.isActive('/', true)
    })

    return (
      <div className={c} role='footer'>
        <div>
          Services saisonniers Rive Nord © 2016 - Tous Droits Réservés
        </div>
      </div>
    )
  }
}

export default Footer
