import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { media } from '../../utils'
import UnstyledLogo from '../Logo'

export const Wrapper = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 2rem;
  position: relative;

  ${media.tablet`
    height: 100px;
    padding: 0 4rem;
  `};
`

export const Logo = styled(UnstyledLogo)`
  margin: 0 auto;
  position: absolute;
  left: 50%;
  margin-left: -58.5px;

  ${media.tablet`
    margin-left: -114.5px;
  `};
`

export const NavLink = styled(Link)`
  font-size: 1.6rem;
  font-weight: 300;
  text-transform: uppercase;
`
