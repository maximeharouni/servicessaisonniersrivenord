import React from 'react'
import { Link } from 'react-router'

import './Home.scss'

class Home extends React.Component {
  render () {
    return (
      <div className='home'>
        <div className='home__section1'>
          <div className='home__overlay'>
            <div className='home__titles'>
              <h1 className='home__brand'>Installation d'abris d'autos </h1>
              <h2 className='home__services'>Grand Montréal et rive Nord</h2>
            </div>
          </div>
          <img src='images/snow.png' className='home__img' />
        </div>
      </div>
    )
  }
}

export default Home

/*
<h1>Home</h1>
<p>Choisissez votre installtion sur mesure</p>

<div className='home__button'>
  <Link to='/services'>
    <h2>Commander</h2>
  </Link>
</div>
*/
