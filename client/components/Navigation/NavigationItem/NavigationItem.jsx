import React from 'react'
import { IndexLink, Link } from 'react-router'
import classNames from 'classnames'

import './NavigationItem.scss'

class NavigationItem extends React.Component {
  static contextTypes = {
    router: React.PropTypes.any
  }

  constructor () {
    super()

    this.state = {
      isOpen: false
    }
  }

  componentDidMount () {
    this.setState({
      isOpen: this.context.router.isActive({ pathname: this.props.data.link })
    })
  }

  renderSubNavigation () {
    return (
      <ul className={'navigation-item__submenu ' + (this.state.isOpen ?'navigation-item__submenu--open':'')}>
        { this.props.data.submenu.map((s, i) => {
            return (
              <li key={i} className='navigation-item__submenu-item'>
                <Link to={this.props.data.link + (s.link || `/index`)} activeClassName='navigation-item__submenu-item--active'>
                  {s.text}
                </Link>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render () {
    let asSubMenu = this.props.data.submenu != null
    let toggleClass = classNames('navigation-item__toggle', 'fa',{
      'fa-plus': !this.state.isOpen,
      'fa-minus': this.state.isOpen
    })

    if (this.props.data.submenu === null || this.props.data.submenu === undefined)
      return (
        <li className='navigation-item'>
          <Link to={this.props.data.link} activeClassName='navigation-item--active'>
            <i className={'fa fa-' + this.props.data.icon}></i>
            {this.props.data.text}
          </Link>
        </li>
      )
    else
      return (
        <li className='navigation-item navigation-item-multiple'>
          <Link onClick={(e) => {
            e.preventDefault()
            this.setState({
              isOpen: !this.state.isOpen
            })
          }} to={this.props.data.link} activeClassName='navigation-item--active'>
            <i className={'fa fa-' + this.props.data.icon}></i>
            {this.props.data.text}
            <i className={toggleClass}></i>
          </Link>
          {this.renderSubNavigation()}
        </li>
      )
  }
}

export default NavigationItem
