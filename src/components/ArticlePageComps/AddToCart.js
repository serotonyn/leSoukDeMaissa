import React, { Component } from 'react'
import StoreContext from '../../context/cartContext'
import { CheckoutButton } from '../../symbols/CheckoutButton'

export default class AddToCart extends Component {
  state = {
    quantity: 1,
  }
  handleSubmit = (e, context) => {
    const { product } = this.props
    const cartId = localStorage.getItem('mcart')

    context.addToCart(cartId, product)
  }
  render() {
    return (
      <StoreContext.Consumer>
        {context => (
          <div onClick={e => this.handleSubmit(e, context)}>
            <CheckoutButton text="Ajouter Au Panier" />
          </div>
        )}
      </StoreContext.Consumer>
    )
  }
}
