import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import CartPage from '../components/pages/CartPage'

import { Menu } from '../components/indexPageComponents/Menu'
import Layout from '../components/layout'

const Wrapper = styled.div`
  & > div:nth-child(3) {
    margin-top: 30px;
  }
`

const Cart = props => {
  return (
    <Layout>
      <Wrapper>
        <Menu />
        <CartPage />
      </Wrapper>
    </Layout>
  )
}

export default Cart
