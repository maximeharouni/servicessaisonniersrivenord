import React from 'react'
import Selection from '/components/Selection'
import Location from '/components/Location'

import './Installation.scss'

import { abris, accessoires } from './Abris.json'

class Installation extends React.Component {
  submit () {

  }
  
  render () {
    return (
      <div className='installation container'>
        <h1>Installation</h1>
        <p>Nous sommes capables d'installer n'importe quel abri temporaire</p>
        <p>Les prix sont fixés selon vos besoins</p>

        <h2>Type d'abri</h2>
        <div className='abris'>
          <Selection ref='abris' items={abris} width={4} />
        </div>

        <h2>Accessoires</h2>
        <div className='accessoires'>
          <Selection ref='accessoires' items={accessoires} multiple={true} width={6} />
        </div>

        <h2>Localisation</h2>
        <Location />

        <div className='installation__submit'>
          <button onClick={this.submit.bind(this)}>Envoyer</button>
        </div>

      </div>
    )
  }
}

export default Installation
