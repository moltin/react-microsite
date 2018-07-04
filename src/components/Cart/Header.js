import React from 'react'
import styled from 'styled-components'

import { CartSubHeading, Padding, BackBtn } from './styles'

const Header = styled.div`
  text-align: center;
`

export default ({ isCart, close, goBack, count, total }) => (
  <Header>
    <Padding>
      <BackBtn onClick={isCart ? close : goBack} isCart={isCart}>
        {isCart ? 'Close' : 'Go back'}
      </BackBtn>

      <h2>Your {isCart ? 'Cart' : 'Checkout'}</h2>
      <CartSubHeading>
        You have <strong>{count}</strong> items in your cart totaling{' '}
        <strong>{total}</strong>.
      </CartSubHeading>
    </Padding>
  </Header>
)
