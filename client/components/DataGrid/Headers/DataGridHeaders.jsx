import React from 'react'
import classNames from 'classnames'

import DataGridHeader from '../Header'

import './DataGridHeaders.scss'

class DataGridHeaders extends React.Component {
  constructor () {
    super()

    this.headers = []

    this.sortData = this.sortData.bind(this)
  }

  resetSorting () {
    this.headers.map((h, i) => {
      h.setState({
        sorting: 'NONE'
      })
    })
  }

  sortData (i, order) {
    if (typeof this.props.sort === 'function') {
      this.resetSorting()
      this.props.sort(i, order)
    }
  }

  render () {
    return (
      <thead>
        <tr>
          { this.props.columns.map((c, i) => {
              return (
                <DataGridHeader ref={(ref) => this.headers[i] = ref} name={c.name} key={i} sort={this.sortData}>
                  {c.header}
                </DataGridHeader>
              )
            })
          }
          <th className='datagrid-header__buttons'></th>
        </tr>
      </thead>
    )
  }
}

export default DataGridHeaders
