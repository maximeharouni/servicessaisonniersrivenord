import React from 'react'
import classNames from 'classnames'
import reqwest from 'reqwest'
import Geosuggest from 'react-geosuggest'

import './Location.scss'

class Location extends React.Component {
  constructor () {
    super()

    this.state = {
      address: '',
      postal: '',
      location: undefined
    }
  }

  getLocation () {
    navigator.geolocation.getCurrentPosition((position) => {
      let geocoder = new google.maps.Geocoder;
      geocoder.geocode({'location': {
              lat: position.coords.latitude,
              lng: position.coords.longitude
        }}, (results, status) => {
          if (status === google.maps.GeocoderStatus.OK) {
            console.log(results[0])
            this.setState({
              address: results[0].formatted_address
            })
          }
        })
    })
  }

  handleAddressChange (e) {
    this.setState({ address: e.target.value });
  }

  handlePostalChange (e) {
    this.setState({ postal: e.target.value });
  }

  render () {
    return (
      <div className='location'>
        <div className='location__group location__address'>
          <label className='location__label'>Adresse</label>
          <Geosuggest placeholder="Adresse" location={new google.maps.LatLng(45.727837, -73.686420)} radius={200} />
        </div>
        <div className='location__group location__postal'>
          <label className='location__label'>Code postal</label>
          <input className='location__input' type='text' placeholder='A2A 2A2' value={this.state.postal} onChange={this.handlePostalChange.bind(this)} />
        </div>

        <button className='location__button' onClick={this.getLocation.bind(this)}>Laissez nous vous trouver!</button>
      </div>
    )
  }
}

export default Location


// <input className='location__input' type='text' placeholder='## RUE, VILLE' value={this.state.address} onChange={this.handleAddressChange.bind(this)} />
