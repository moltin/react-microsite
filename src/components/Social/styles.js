import styled from 'styled-components'

import { media } from '../../utils'

export const Wrapper = styled.div`
  display: none;

  ${media.tablet`
    position: absolute;
    right: 4rem;
    bottom: 2rem;
    display: flex;
    flex-direction: column;
  `};
`

export const Icon = styled.img`
  margin: 2rem 0;
`
