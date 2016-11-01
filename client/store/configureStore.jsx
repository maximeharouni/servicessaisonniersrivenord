import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import AppReducers from '/reducers/index.jsx'

function configureStore () {
  const store = createStore(
    AppReducers,
    applyMiddleware(thunk)
  )
  return store
}

export default configureStore
