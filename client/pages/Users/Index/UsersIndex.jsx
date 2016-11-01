import React from 'react'
import { connect } from 'react-redux'
import dateFormat from 'dateformat'
import * as usersActions from '/actions/usersActions.jsx'

import DataGrid from '/components/DataGrid'

@connect((state) => {
  return {
    users: state.Users.items
  }
})
class UsersIndex extends React.Component {
  componentWillMount () {
    this.props.dispatch(usersActions.fetchUsers())
  }
  render () {
    return (
      <div className='page-content-inner'>
        <DataGrid
          data={this.props.users}
          addAction={user => {
            this.props.dispatch(usersActions.createUser(user))
          }}
          updateAction={user => {
            this.props.dispatch(usersActions.updateUser(user))
          }}
          fetchAction={() => {
            this.props.dispatch(usersActions.fetchUsers())
          }}
          columns={[
            { name: 'id', header: '#', isEditable: false, type: 'number' },
            { name: 'email', header: 'Adresse courriel', isEditable: true, type: 'text' },
            { name: 'name', header: 'Prénom', isEditable: true, type: 'text' },
            { name: 'lastName', header: 'Nom', isEditable: true, type: 'text' },
            { name: 'created_at', header: 'Inscrit le', isEditable: false, type: 'datetime', render: (value) => {
              return dateFormat(new Date(value), 'yyyy-mm-dd')
            }}
          ]}/>
      </div>
    )
  }
}

export default UsersIndex
