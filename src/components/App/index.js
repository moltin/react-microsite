import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home'

import InfoPage from '../InfoPage'
import InfoModal from '../InfoModal'
import ProductPage from '../ProductPage'
import ProductModal from '../ProductModal'

import './styles'

export default class App extends Component {
  previousLocation = this.props.location

  componentWillUpdate(nextProps) {
    const { location } = this.props

    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render() {
    const { location } = this.props
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    )

    return (
      <React.Fragment>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Home} />
          <Route path="/info" component={InfoPage} />
          <Route path="/product/:id" component={ProductPage} />
        </Switch>
        {isModal ? <Route path="/info" component={InfoModal} /> : null}
        {isModal ? (
          <Route path="/product/:id" component={ProductModal} />
        ) : null}
      </React.Fragment>
    )
  }
}
