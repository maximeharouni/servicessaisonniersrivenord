import { combineReducers } from 'redux'
import Users from './users.jsx'
import User from './user.jsx'

const AppReducers = combineReducers({
  Users,
  User
})

export default AppReducers
