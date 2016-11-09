import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

import './SelectionItem.scss'

class SelectionItem extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    image: React.PropTypes.string,
    description: React.PropTypes.string
  }

  handleOnClick () {
    this.props.selectItem(this.props.id, this.props.selected)
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
      'selection-item--first': (this.props.number + 1) % this.props.width === 1,
      'selection-item--last': (this.props.number + 1) % this.props.width === 0,
      'selection-item--selected': this.props.selected
    })

    return (
      <div className={c} onClick={this.handleOnClick.bind(this)} style={{width: 'calc(' + (1 / this.props.width) * 100 + '% - 18px)'}}>
        <img src={ "images/" + this.props.image} />
        <h4>{this.props.name}</h4>
        <h4>{this.props.description}</h4>
        { this.renderQuantity() }
      </div>
    )
  }
}

export default SelectionItem
