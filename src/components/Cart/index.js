import React, { Component, Fragment } from 'react'

import Button from '../StyledButton'
import CartButton from './CartButton'
import { Wrapper, Padding, ItemList, CartTotal } from './styles'
import Header from './Header'
import CartItem from './Item'
// import Checkout from '../Checkout'

export default class Cart extends Component {
  render() {
    const {
      onClick,
      total,
      count,
      text,
      showCartTotal,
      shown,
      items,
      updateCartQuantity,
      removeFromCart,
      ...props
    } = this.props

    return (
      <Fragment>
        <CartButton
          onClick={onClick}
          total={total}
          count={count}
          showCartTotal
        />

        <Wrapper shown={shown}>
          <Header close={onClick} total={total} count={count} {...props} />

          {this.props.currentIndex === 0 ? (
            <Fragment>
              <ItemList>
                {items.map(item => (
                  <CartItem
                    key={item.id}
                    handleChange={updateCartQuantity}
                    onRemoveItem={removeFromCart}
                    color={props.color}
                    {...item}
                  />
                ))}
              </ItemList>

              <Padding noPaddingBottom>
                <CartTotal>
                  Total: <strong>{total}</strong>
                </CartTotal>
              </Padding>

              <Padding>
                <Button block outline onClick={this.props.goForward} {...props}>
                  Proceed to Checkout
                </Button>
              </Padding>
            </Fragment>
          ) : null
          // (
          // <Checkout {...props} />
          // )
          }
        </Wrapper>
      </Fragment>
    )
  }
}
