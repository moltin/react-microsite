import styled from 'styled-components'

import Arrow from './arrow.svg'

export const Select = styled.select`
  background: transparent;
  background-image: url(${Arrow});
  background-position: 75% 50%;
  background-repeat: no-repeat;
  border: 1px solid ${props => props.theme.color};
  border-radius: 0;
  font-size: 14px;
  padding: 8px 10px;
  -webkit-appearance: none;
  width: 75px;
  margin-right: 15px;

  &:focus {
    outline: none;
  }
`

export const InputField = Input => styled(Input)`
  background: transparent;
  border: 1px solid ${props => props.theme.color};
  border-radius: 0;
  font-size: 14px;
  padding: 8px 10px;
  width: 75px;
  margin-right: 15px;

  &:focus {
    outline: none;
  }
`
