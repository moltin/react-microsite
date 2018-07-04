import React from 'react'
import styled from 'styled-components'

import ProductImage from '../ProductImage'
import QuantityControl from '../quantity-select-input'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1 1 100%;
  line-height: 1;
  padding: 0 30px 30px;
`

const Image = styled(ProductImage)`
  background-color: transparent;
  width: 75px;
  height: 75px;
  padding: 0;
  margin-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`

const Details = styled.div`
  flex: 1 1 100%;
`

const ProductName = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin: 0 0 10px;
  color: ${props => props.color};
`

const ProductPrice = styled.span`
  color: #8c8c8c;
  font-size: 14px;
  display: block;
`

const RemoveBtn = styled.span`
  color: #8c8c8c;
  font-size: 19px;
  cursor: pointer;

  &:hover {
    color: ${props => (props.color ? props.color : props.theme.color)};
  }
`

export default ({ image, name, meta, onRemoveItem, color, ...rest }) => (
  <Wrapper>
    <Image src={image} alt={name} />

    <Details>
      <ProductName color={color}>{name}</ProductName>
      <QuantityControl {...rest} color={color} />
      <RemoveBtn onClick={() => onRemoveItem(rest.id)} color={color}>
        &times;
      </RemoveBtn>
    </Details>

    <ProductPrice>{meta.display_price.with_tax.value.formatted}</ProductPrice>
  </Wrapper>
)
