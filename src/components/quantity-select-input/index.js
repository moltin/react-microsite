import React, { Component } from 'react'
import { DebounceInput } from 'react-debounce-input'

import { InputField, Select } from './styles'

const Input = InputField(DebounceInput)

export default class QuantitySelectInput extends Component {
  state = {
    editing: this.props.quantity > 9,
    quantity: this.props.quantity || 1
  }

  _handleQtyInputChange = ({ target: { value: quantity } }) => {
    const editing = quantity > 9
    this._handleQtyChange(editing, quantity)
  }

  _handleQtySelectChange = ({ target: { value: quantity } }) => {
    const editing = parseInt(quantity, 10) === 10

    this._handleQtyChange(editing, quantity)
  }

  _handleQtyChange = (editing, quantity) => {
    if (quantity === 0) return

    this.setState(
      {
        editing,
        quantity
      },
      () => this.props.handleChange(this.props.id, quantity)
    )
  }

  render() {
    const { editing, quantity } = this.state
    const { color } = this.props

    if (editing)
      return (
        <Input
          type="tel"
          min={1}
          value={quantity}
          onChange={this._handleQtyInputChange}
          debounceTimeout={600}
          autoFocus
          color={color}
        />
      )

    return (
      <Select
        color={color}
        onChange={this._handleQtySelectChange}
        value={quantity}>
        {new Array(9)
          .fill(0)
          .map((v, k) => k + 1)
          .map(i => <option value={i}>{i}</option>)}
        <option value={10}>10+</option>
      </Select>
    )
  }
}
