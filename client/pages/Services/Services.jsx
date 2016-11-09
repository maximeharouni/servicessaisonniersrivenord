import React from 'react'
import { Link } from 'react-router'

import './Services.scss'

class Services extends React.Component {
  render () {
    return (
      <div className='services container'>
        <h1>Services</h1>
        <p>
          Cras consequat lobortis quam in accumsan. Pellentesque velit purus, faucibus vitae laoreet non, rhoncus vel lacus. Nunc ac convallis eros.
          Duis consequat id metus ac ullamcorper. Fusce ac rhoncus elit, nec tincidunt lorem. Sed non posuere purus. Curabitur congue mauris neque,
          eu ornare diam sagittis ut. Nam vehicula nibh non lobortis sodales. Sed quis nisl a nulla euismod tristique. Sed ante sapien, suscipit sit
          amet metus ac, congue placerat magna.
        </p>
        <div className='link-container'>
          <Link to='/installation'>
            <div className='services__overlay'>
              <h2>Installation</h2>
            </div>
            <img src='images/tempo_left.jpg' />
          </Link>
          <Link to='/vente'>
            <div className='services__overlay'>
              <h2>Vente</h2>
            </div>
            <img src='images/tempo_right.jpg' />
          </Link>
        </div>
      </div>
    )
  }
}

export default Services
