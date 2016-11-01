import React from 'react'
import { Link } from 'react-router'

class Services extends React.Component {
  render () {
    return (
      <div className='services container'>
        <h1>Services</h1>
        <Link to='/installation'><h2>Installation</h2></Link>
        <Link to='/vente'><h2>Vente</h2></Link>
      </div>
    )
  }
}

export default Services
