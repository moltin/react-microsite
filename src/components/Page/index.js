import React from 'react'

import { Wrapper, Main } from './styles'
import Header from '../Header'

export default ({ children }) => (
  <Wrapper>
    <Header />
    <Main>{children}</Main>
  </Wrapper>
)
