import React from 'react'

export default (ComposedComponent) => {
  return class PureComponent extends React.Component {
    shouldComponentUpdate (nextProps, nextStates) {
      return !compareTo(this.props, nextProps) || !compareTo(this.state, nextStates)
    }

    render () {
      return (
        <ComposedComponent { ...this.props } />
      )
    }
  }
}

function compareTo (objA, objB) {
  if (objA === objB)
    return true

  if (typeof objB !== 'object' || objB === null)
    return false

  if (Object.keys(objA).length !== Object.keys(objB).length)
    return false

  let bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB)
  Object.keys(objA).forEach((keyA, i) => {
    if (!bHasOwnProperty(keyA) || objA[keyA] !== objB[keyA])
      return false
  })
}
