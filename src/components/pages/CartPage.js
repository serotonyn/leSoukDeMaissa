import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

import CartItems from '../CartPageComps/CartItems'
import Checkout from '../../symbols/Checkout'
import StoreContext from '../../context/cartContext'

const CartPage = props => {
  return (
    <StoreContext.Consumer>
      {({
        checkout: { lineItems, subtotal, totalPrice, livraison },
        removeLineItem,
      }) => {
        const handleRemove = itemID => event => {
          event.preventDefault()
          removeLineItem(itemID)
        }
        return (
          <div>
            <CartItems lineItems={lineItems} handleRemove={handleRemove} />
            <Checkout
              subtotal={subtotal}
              totalPrice={totalPrice}
              livraison={livraison}
            />
          </div>
        )
      }}
    </StoreContext.Consumer>
  )
}

// CartPage.propTypes = {}

export default CartPage
