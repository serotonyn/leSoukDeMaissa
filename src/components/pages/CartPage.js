import React from 'react'
import PropTypes from 'prop-types'

import CartItems from '../CartPageComps/CartItems'
import Checkout from '../../symbols/Checkout'

const CartPage = props => {
  return (
    <div>
      <CartItems />
      <Checkout />
    </div>
  )
}

CartPage.propTypes = {}

export default CartPage
