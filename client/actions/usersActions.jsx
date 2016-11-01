import reqwest from 'reqwest'
import * as ActionTypes from './ActionTypes'

export function fetchUsers () {
  return dispatch => {
    dispatch(api('GET', 'FETCH'))
  }
}

export function createUser (data) {
  return dispatch => {
    dispatch(api('POST', 'CREATE', wrapUser(data)))
  }
}

export function updateUser (data) {
  return dispatch => {
    dispatch(api('PUT', 'UPDATE', wrapUser(data), data.id))
  }
}
// JWT for server authentication
function api (method, action, data = [], id = null) {
  return dispatch => {
    dispatch(request(action))
    reqwest({
      url: '/api/users' + (id === null? '': `/${id}`),
      type: 'json',
      contentType: 'application/json',
      method: method,
      data: JSON.stringify(data),
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      },
      success: (response) => {
        dispatch(receive(action, response))
      },
      error: (error) => {
        dispatch(fail(action, error.response))
      }
    })
  }
}

function request (action) {
  return {
    type: ActionTypes[`${action}_USERS_REQUEST`]
  }
}

function receive (action, response) {
  return {
    type: ActionTypes[`${action}_USERS_SUCCESS`],
    payload: response
  }
}

function fail (action, response) {
  return {
    type: ActionTypes[`${action}_USERS_FAILED`]
  }
}

function wrapUser (data) {
  let wrappedData = {
    user: {}
  }
  for (let d in data)
    wrappedData.user[d] = data[d]
  return wrappedData
}
