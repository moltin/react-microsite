import styled, { css } from 'styled-components'

export const Button = styled.button.attrs({
  disabled: props => props.loading
})`
  background: ${props => (props.color ? props.color : 'transparent')};
  border: 1px solid transparent;
  color: ${props => (props.color ? props.color : '#313131')};
  cursor: ${props => (props.loading ? 'not-allowed' : 'pointer')};
  display: inline-block;
  padding: 12px 20px;
  font-size: 18px;
  font-weight: 300;
  margin: 1px;
  text-align: center;
  outline: 0;
  opacity: ${props => (props.loading ? 0.5 : 1)};

  ${props =>
    props.outline &&
    css`
      background: transparent;
      border-color: ${props => (props.color ? props.color : props.theme.color)};
    `};

  ${props =>
    props.block &&
    css`
      width: 100%;
    `};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
