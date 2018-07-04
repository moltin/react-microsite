import styled from 'styled-components'
import Carousel from 'nuka-carousel'

import { media } from '../../utils'

export const Wrapper = styled(Carousel)`
  padding: 0 1.5rem;
  position: relative;

  ${media.tablet`
    padding-left: 4rem;
    padding-right: 4rem;
  `};
`

export const ControlBtn = styled.a`
  align-items: center;
  background-color: #fff;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 4rem 1.5rem;
  outline: 0;
  transform: scale(0.5) ${({ rotate }) => (rotate ? 'rotate(180deg)' : null)};
  transition: padding 150ms ease;

  &:hover {
    padding-left: 2rem;
  }

  ${media.tablet`
    padding: 5rem 2.5rem;
    transform: scale(1) ${({ rotate }) => (rotate ? 'rotate(180deg)' : null)};

    &:hover {
      padding-left: 5rem;
    }
  `};
`

export const Slide = styled.div`
  background-color: #f2f4f5;
  height: calc(100vh - 140px);
  display: flex;
  position: relative;
`

export const InnerContent = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  ${media.tablet`
    flex-direction: row;

    &:after {
      background-color: #ebeeef;
      content: '';
      width: 680px;
      height: 404px;
      margin-left: 110px;
      position: absolute;
      z-index: 0;
    }
  `};
`

export const ProductImage = styled.img`
  width: 100%;
  display: block;
  order: 0;

  ${media.tablet`
    width: 54rem;
    order: 1;
    z-index: 1;
  `};
`

export const Summary = styled.div`
  padding: 4rem;
  position: relative;
  order: 1;

  ${media.tablet`
    width: 54rem;
    order: 0;
    z-index: 1;
  `};
`

export const Price = styled.p`
  color: #6e6e6e;
  float: right;

  ${media.tablet`
    font-size: 2rem;
    float: none;
  `};
`

export const Title = styled.h2`
  font-size: 2.8rem;
  line-height: 1.2;
  font-weight: 400;
  margin: 1.5rem 0;

  ${media.tablet`
    font-size: 5.6rem;
    z-index: 1;
  `};
`

export const Description = styled.p`
  line-height: 1.8;
  margin: 0 0 3rem;

  ${media.tablet`
    line-height: 2;
  `};
`
