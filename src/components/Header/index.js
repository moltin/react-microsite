import React from 'react'
import { Cart as ShopkitCart } from '@moltin/react-shopkit'
import Cart from '../Cart'

import { Wrapper, Logo, NavLink } from './styles'

export default () => (
  <Wrapper>
    <NavLink
      to={{
        pathname: 'info',
        state: { modal: true }
      }}>
      Info
    </NavLink>
    <Logo to="/">Bright Cosmetics</Logo>
    <ShopkitCart>{props => <Cart {...props} />}</ShopkitCart>
  </Wrapper>
)
