import React from 'react'
import classNames from 'classnames'

import './DataGridHeader.scss'

class DataGridHeader extends React.Component {
  constructor () {
    super()

    this.state = {
      sorting: 'NONE',
      isVisible: true
    }
  }

  componentDidMount () {
    if (this.props.name === 'id')
      this.setState({
        sorting: 'DESC'
      })
  }

  sortColumn () {
    let order = this.state.sorting === 'DESC' ? 'ASC' : 'DESC'
    this.props.sort(this.props.name, order)
    this.setState({
      sorting: order
    })
  }

  render () {
    let sortClasses = classNames('fa', 'datagrid-header__sort', {
      'fa-sort': this.state.sorting !== 'ASC' && this.state.sorting !== 'DESC',
      'fa-sort-asc': this.state.sorting === 'ASC',
      'fa-sort-desc': this.state.sorting === 'DESC'
    })
    return (
      <th className='datagrid-header' onClick={() => this.sortColumn()}>
        {this.props.children}
        <i className={sortClasses}></i>
      </th>
    )
  }
}

export default DataGridHeader
