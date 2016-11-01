import React from 'react'

import PureComponent from '/components/PureComponent'
import DataGridHeaders from './Headers'
import DataGridRow from './Row'

import './DataGrid.scss'

@PureComponent
class DataGrid extends React.Component {
  constructor () {
    super()

    this.state = {
      data: [],
      filteredData: [],
      addNew: false
    }

    this.rows = []

    this.sortData = this.sortData.bind(this)
    this.handleCancelRow = this.handleCancelRow.bind(this)
  }

  componentDidMount () {
    this.setState({
      data: this.props.data,
      filteredData: this.props.data
    })
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props !== prevProps)
      this.setState({
        data: this.props.data,
        filteredData: this.props.data
      })
  }

  sortData (i, order, callback) {
    let sortedData = this.state.filteredData.sort((a, b) => {
      if (a[i] < b[i])
        return order === 'ASC' ? 1 : -1
      if (a[i] > b[i])
        return order === 'ASC' ? -1 : 1
      return 0
    })
    this.setState({
      filteredData: sortedData
    }, () => {
      if (typeof callback === 'function')
        callback()
    })
  }

  handleSearchChange (e) {
    let filteredData = this.state.data.filter((d, i) => {
      for (let c of this.props.columns) {
        if (String(d[c.name]).indexOf(e.target.value) !== -1)
          return true
      }
      return false
    })
    this.setState({
      filteredData: filteredData
    })
  }

  addNew () {
    this.setState({
      addNew: true
    })
  }

  handleCancelRow (isNew, id = null) {
    if (isNew)
      this.setState({
        addNew: false
      })
    else if (id !== null) {
      this.rows[id].setState({
        isEdit: false
      })
    }
  }

  render () {
    return (
      <div className='datagrid'>
        <div className='datagrid__search'>
          <div className='datagrid__search__search'>
            <div className='input-group'>
              <input type='text' className='form-control' placeholder='Recherche' onChange={this.handleSearchChange.bind(this)} />
              <span className="input-group-btn">
                <button type='button' className='btn btn-default'>
                  <i className='fa fa-search'></i>
                </button>
              </span>
            </div>
          </div>
          <div className='datagrid__search__add-button'>
            <div className='input-group'>
              <div className='btn-group'>
                <button type='button' className='btn btn-default btn-add' onClick={this.addNew.bind(this)}>
                  Add
                  <i className='fa fa-plus'></i>
                </button>
                <button type='button' className='btn btn-default dropdown-toggle' data-toggle='dropdown'>
                  <i className='fa fa-cog'></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <table className='table table-bordered table-hover'>
          <DataGridHeaders columns={this.props.columns} sort={this.sortData}/>
          <tbody>
            {(() => {
                if (this.state.addNew) {
                  return (
                    <DataGridRow
                      data={[]}
                      columns={this.props.columns}
                      isEdit={true}
                      isNew={true}
                      onSave={(data) => {
                        this.props.addAction(data)
                        this.props.fetchAction()
                      }}
                      onCancel={this.handleCancelRow} />
                  )
                }
            })()}
            { this.state.filteredData.map((d, i) => {
                return (
                  <DataGridRow
                    key={i}
                    data-id={i}
                    ref={(ref) => this.rows[i] = ref}
                    data={d}
                    onSave={(data) => {
                      this.props.updateAction(data)
                      this.props.fetchAction()
                    }}
                    columns={this.props.columns}
                    onCancel={this.handleCancelRow} />
                )
              })
            }
          </tbody>
          <tfoot>

          </tfoot>
        </table>
      </div>
    )
  }
}

export default DataGrid
