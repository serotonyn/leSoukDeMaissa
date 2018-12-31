import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CartPage from '../components/pages/CartPage'

import { Menu } from '../components/indexPageComponents/Menu'

const Wrapper = styled.div`
  & > div:nth-child(2) {
    margin-top: 30px;
  }
`

const Cart = props => {
  return (
    <Wrapper>
      <Menu />
      <CartPage />
    </Wrapper>
  )
}

export default Cart
