import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fonts, colors, breakpoints } from '../utils/styles'
import { CheckoutButton } from './CheckoutButton'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
  border-top: 1px solid ${colors.gainsboro};
  position: fixed;
  bottom: 0;

  @media screen and (min-width: ${breakpoints[650]}px) {
    flex-items: center;
  }
`

const Politique = styled.div`
  font-family: ${fonts.dosis};
  flex: 1;

  @media screen and (min-width: ${breakpoints[650]}px) {
    flex-direction: row-reverse;
  }
`
const TotalAndCheckout = styled.div`
  font-family: ${fonts.dosis};
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (min-width: ${breakpoints[650]}px) {
    flex-direction: row-reverse;
    justify-content: space-between;

    & button {
      margin-left: calc(-173px / 2);
    }
  }
`

const Price = styled.p`
  font-family: ${fonts.monospace};
  margin-left: 20px;
`

const Checkout = ({ total }) => {
  return (
    <Wrapper>
      <Politique>Lire notre politique</Politique>
      <TotalAndCheckout>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginBottom: 10,
          }}
        >
          <span>Total</span>
          <Price>{total} DA</Price>
        </div>
        <CheckoutButton text="Valider La Commande" />
      </TotalAndCheckout>
    </Wrapper>
  )
}

Checkout.propTypes = {
  total: PropTypes.string.isRequired,
}
Checkout.defaultProps = {
  total: '8999',
}

export default Checkout
