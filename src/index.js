import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Shopkit as ShopkitProvider } from '@moltin/react-shopkit'

import App from './components/App'

const {
  REACT_APP_MOLTIN_CLIENT_ID = 'EdP3Gi1agyUF3yFS7Ngm8iyodLgbSR3wY4ceoJl0d2'
} = process.env

const target = document.querySelector('#root')

render(
  <ShopkitProvider clientId={REACT_APP_MOLTIN_CLIENT_ID} color="#E0C4A6">
    <Router>
      <Route component={App} />
    </Router>
  </ShopkitProvider>,
  target
)
