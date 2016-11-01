import React from 'react'

import './DataGridCell.scss'

class DataGridCell extends React.Component {
  constructor () {
    super ()

    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    this.setState({
      value: this.props.value
    })
  }

  renderValue (value) {
    if (typeof this.props.renderValue === 'function')
      return this.props.renderValue(value)

    return value
  }

  handleChange (e) {
    this.setState({
      value: e.target.value
    }, () => {
      this.props.onChange(this.state.value, this.props.name)
    })
  }

  render () {
    let align = {textAlign: this.props.align}
    if (this.props.isEdit)
      return (
        <td className='datagrid-cell--edit'>
          <input
            className='form-control'
            value={this.state.value}
            onChange={this.handleChange} />
        </td>
      )
    else
      return (
        <td className='datagrid-cell' style={align}>
          {this.renderValue(this.props.value)}
        </td>
      )
  }
}

export default DataGridCell
