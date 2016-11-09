import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

import './SelectionItem.scss'

class SelectionItem extends React.Component {
  let propTypes = {
    name: React.PropTypes.string,
    image: React.PropTypes.string,
    description: React.PropTypes.string
  };

  constructor () {
    super()
    this.state = {
      isSelected: false
    }
  }

  renderQuantity () {
    if (this.props.asQuantity)
      return (
        <div className='selection-item__quantity'>

        </div>
      )
  }

  render () {
    let c = classNames({
      'selection-item': true,
      'selection-item--selected': this.state.isSelected
    })

    return (
      <div className={c}>
        <img src={this.props.image} />
        <h5>{this.props.name}</h5>
        <p>{this.props.description}</p>
        { this.renderQuantity() }
      </div>
    )
  }
}

export default SelectionItem
