import React from 'react'
import styled from 'styled-components'

import { Icon } from './styles'
import BagIcon from './bag-icon.svg'

const Wrapper = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  font-weight: 300;
  justify-content: space-between;
  outline: 0;
  text-transform: uppercase;
`

export default ({ total, count, showCartTotal, ...props }) => (
  <Wrapper {...props}>
    Cart <Icon src={BagIcon} role="presentation" /> ({showCartTotal
      ? total
      : count})
  </Wrapper>
)
