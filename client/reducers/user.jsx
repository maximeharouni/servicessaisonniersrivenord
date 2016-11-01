import {
  CREATE_USERS_REQUEST,
  CREATE_USERS_RECEIVE,
  CREATE_USERS_FAILED
 } from '../actions/ActionTypes'

const initialState = {
  isFetching: false,
  items: []
}

function Users (state = initialState, action) {
  switch (action.type) {
    case CREATE_USERS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case CREATE_USERS_RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
      })
    case CREATE_USERS_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}

export default Users
