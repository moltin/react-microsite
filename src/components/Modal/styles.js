import styled from 'styled-components'

import { media } from '../../utils'

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 3rem 1.5rem;

  ${media.tablet`
    align-items: center;
  `};
`

export const Box = styled.div`
  background-color: #ffffff;
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.08);
  padding: 40px;
  z-index: 1000;
  width: 100%;

  ${media.tablet`
    width: 56rem;
  `};
`

export const CloseBtn = styled.a`
  cursor: pointer;
  margin: 0 auto;
  display: block;
  padding: 20px;
  text-align: center;
`

export const Title = styled.h2`
  color: #313131;
  font-size: 2.8rem;
  font-weight: 300;
  text-align: center;
  margin: 2rem 0;
`
