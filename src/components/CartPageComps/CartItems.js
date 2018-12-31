import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CartItem from '../../symbols/CartItem'
import { colors, fonts } from '../../utils/styles'

const Wrapper = styled.div`
  & > div + div {
    margin-top: 22px;
  }
  & > div:not(:last-child) {
    border-bottom: 1px solid ${colors.gainsboro};
    padding-bottom: 22px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h2`
  font-family: ${fonts.monospace};
  font-weight: 100;
  margin-bottom: 29px;
`

const CartItems = () => {
  return (
    <Wrapper>
      <Title>Votre Panier</Title>
      <CartItem />
      <CartItem />
      <CartItem />
    </Wrapper>
  )
}

CartItems.propTypes = {}

export default CartItems
