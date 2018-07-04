import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { media } from '../../utils'
import LargeLogo from './large-logo.svg'
import SmallLogo from './small-logo.svg'

export default styled(Link)`
  background-image: url(${SmallLogo});
  background-size: 117px 15px;
  background-repeat: no-repeat;
  width: 117px;
  height: 15px;
  font-size: 0;

  ${media.tablet`
    background-image: url(${LargeLogo});
    background-size: 229px 20px;
    width: 229px;
    height: 20px;
  `};
`
