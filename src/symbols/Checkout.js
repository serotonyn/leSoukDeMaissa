import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fonts, colors, breakpoints } from '../utils/styles'
import { CheckoutButton } from './CheckoutButton'
import {
  CostBlock,
  CostDetails,
  PriceBox,
  CostTotal,
} from '../components/shared/Cart/OpenCart'

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  border-top: 1px solid ${colors.gainsboro};
  position: fixed;
  bottom: 0;

  @media screen and (min-width: ${breakpoints[650]}px) {
    flex-items: center;
  }
`
const MaxWidth = styled.div`
  max-width: 1284px;
  margin: 0 auto;
  width: 100%;
  display: flex;
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

const Checkout = ({ subtotal, totalPrice, livraison }) => {
  return (
    <Wrapper>
      <MaxWidth>
        <Politique>Lire notre politique</Politique>
        <TotalAndCheckout>
          <CostBlock>
            <CostDetails>
              Sous-total: <PriceBox>{subtotal}DA</PriceBox>
            </CostDetails>
            <CostDetails>
              Livraison: <PriceBox>{livraison} DA</PriceBox>
            </CostDetails>
            <CostTotal>
              Total: <PriceBox>{totalPrice}DA</PriceBox>
            </CostTotal>
          </CostBlock>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div>
              <input type="submit" value="Send Message" className="special" />
              {/* <CheckoutButton text="Commander maintenant" /> */}
            </div>
          </form>
        </TotalAndCheckout>
      </MaxWidth>
    </Wrapper>
  )
}

Checkout.propTypes = {
  subtotal: PropTypes.number.isRequired,
}
Checkout.defaultProps = {
  // subtotal: '8999',
}

export default Checkout
