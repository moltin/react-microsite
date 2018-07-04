import React from 'react'

import { Wrapper, Icon } from './styles'

import instagram from './instagram.svg'
import facebook from './facebook.svg'
import twitter from './twitter.svg'

export default () => (
  <Wrapper>
    <Icon src={instagram} alt="Share on Instagram" />
    <Icon src={facebook} alt="Share on Facebook" />
    <Icon src={twitter} alt="Share on Twitter" />
  </Wrapper>
)
