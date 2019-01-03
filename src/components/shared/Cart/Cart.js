import React from 'react'
import styled from 'styled-components'
import onClickOutside from 'react-onclickoutside'
import MenuToggle from './MenuToggle'
import OpenCart from './OpenCart'
import { withStoreContext } from '../../../context/cartContext'

const CartWrapper = styled.section`
  position: relative;
  z-index: 1;
`

class Cart extends React.PureComponent {
  handleClickOutside = event => {
    const { toggleCart, isCartOpen } = this.props.storeContext
    isCartOpen && toggleCart()
  }

  render() {
    return (
      <CartWrapper>
        <MenuToggle />
        <OpenCart />
      </CartWrapper>
    )
  }
}

export default withStoreContext(onClickOutside(Cart))
// export default Cart
