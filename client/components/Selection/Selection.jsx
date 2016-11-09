import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

import SelectionItem from './SelectionItem'

import './Selection.scss'

class Selection extends React.Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired,
    multiple: React.PropTypes.bool
  }

  constructor () {
    super()

    this.state = {
      selectedItems: []
    }
  }

  selectItem (id, selected) {
    if (!selected) {
      this.setState({
        selectedItems: this.props.multiple ? [...this.state.selectedItems, id] : [id]
      })
    } else {
      this.setState({
        selectedItems: this.props.multiple ? this.state.selectedItems.filter(x => x != id) : []
      })
    }
  }

  renderItems () {
    return this.props.items.map((item, n) => {
      return (
        <SelectionItem
        {...item}
        key={n}
        number={n}
        selected={this.state.selectedItems.includes(n)}
        selectItem={this.selectItem.bind(this)}
        width={this.props.width}
        />
      )
    })
  }

  render () {
    let c = classNames({
      'selection': true,
    })

    return (
      <div className={c}>
      { this.renderItems() }
      </div>
    )
  }
}

export default Selection
