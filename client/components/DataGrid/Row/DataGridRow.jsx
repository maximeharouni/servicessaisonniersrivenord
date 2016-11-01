import React from 'react'

import DataGridCell from '../Cell'

import './DataGridRow.scss'

class DataGridRow extends React.Component {
  constructor () {
    super()

    this.state = {
      isEdit: false
    }

    this.onModelChange = this.onModelChange.bind(this)
  }

  componentDidMount () {
    this.model = this.props.data
  }

  componentDidUpdate () {
    this.model = this.props.data
  }

  handleSaveButton () {
    this.props.onSave(this.model)
    this.setState({
      isEdit: false
    })
  }

  handleCancelButton () {
    this.props.onCancel(this.props.isNew, this.props['data-id'])
  }

  handleEditButton () {
    this.setState({
      isEdit: true
    })
  }

  handleDeleteButton () {

  }

  onModelChange (value, key) {
    this.model[key] = value
  }

  renderButtons () {
    if (this.props.isEdit || this.state.isEdit)
      return (
        <td className='datagrid-btn-group'>
          <div className='btn-group'>
            <button type='button' className='btn btn-default btn-datagrid' onClick={this.handleSaveButton.bind(this)}>
              <i className='fa fa-floppy-o'></i>
            </button>
            <button type='button' className='btn btn-default btn-datagrid' onClick={this.handleCancelButton.bind(this)}>
              <i className='fa fa-times'></i>
            </button>
          </div>
        </td>
      )
    else
      return (
        <td className='datagrid-btn-group'>
          <div className='btn-group'>
            <button type='button' className='btn btn-default btn-datagrid' onClick={this.handleEditButton.bind(this)}>
              <i className='fa fa-pencil'></i>
            </button>
            <button type='button' className='btn btn-default btn-datagrid' onClick={this.handleDeleteButton.bind(this)}>
              <i className='fa fa-trash'></i>
            </button>
          </div>
        </td>
      )
  }

  render () {
    return (
      <tr className='datagrid-row'>
        { this.props.columns.map((c, j) => {
            return (
              <DataGridCell
                key={j}
                value={this.props.data[c.name]}
                name={c.name}
                align={c.align}
                isEdit={(this.props.isEdit || this.state.isEdit) && c.isEditable}
                onChange={this.onModelChange}
                renderValue={c.render}
              />
            )
          })
        }
        { this.renderButtons() }
        </tr>
    )
  }
}

export default DataGridRow
