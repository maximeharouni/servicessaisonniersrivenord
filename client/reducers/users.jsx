import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED
 } from '../actions/ActionTypes'

const initialState = {
  isFetching: false,
  items: []
}

function Users (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_USERS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.payload
      })
    case FETCH_USERS_FAILED:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}

export default Users
