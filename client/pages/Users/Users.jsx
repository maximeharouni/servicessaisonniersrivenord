import React from 'react'

class Users extends React.Component {
  render () {
    return (
      <div className='container-fluid'>
        <h1>Users</h1>
        {this.props.children}
      </div>
    )
  }
}

export default Users
