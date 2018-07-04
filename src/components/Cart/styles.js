import styled, { css } from 'styled-components'

export const Wrapper = styled.aside`
  background: #fff;
  box-shadow: 0 16px 64px rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 0;
  right: ${props => (props.shown ? '0' : '-450px')};
  bottom: 0;
  width: 450px;
  overflow: auto;
  height: 100%;
  transition: right 0.3s ease-in-out;
  z-index: 1000;
`

export const ItemList = styled.div`
  background-color: #f7f9fa;
  border-top: 1px solid #edeff0;
  border-bottom: 1px solid #edeff0;
  padding: 30px 0 0;
`

export const CartTotal = styled.p`
  color: #6e6e6e;
  font-size: 20px;
  margin: 0;
  padding: 0;
  text-align: right;

  > strong {
    color: #131313;
  }
`

export const CartSubHeading = styled.p`
  color: #484848;
  font-size: 16px;

  > strong {
    color: #131313;
  }
`

export const Padding = styled.div`
  padding: 30px;

  ${props =>
    props.noPaddingBottom &&
    css`
      padding-bottom: 0;
    `};
`

export const BackBtn = styled.span`
  position: absolute;
  top: 30px;
  right: ${props => (props.isCart ? '30px' : 'auto')};
  left: ${props => (props.isCart ? 'auto' : '30px')};
  font-size: 12px;
  text-transform: uppercase;
`

export const Icon = styled.img`
  margin: 0 1.5rem;
`
