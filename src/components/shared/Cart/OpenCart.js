import React from 'react'
import styled from 'styled-components'
// import StoreContext from '../../context/StoreContext';
import EmptyCart from './EmptyCart'
// import AddedToCart from './AddedToCart';
import { colors, button, dropdown, spacing } from '../../../utils/stylesIsolate'
import { fonts } from '../../../utils/styles'
import CartContext from '../../../context/cartContext'
import ItemList from './ItemList'
import { CheckoutButton } from '../../../symbols/CheckoutButton'
import { Link } from 'gatsby'

const OpenCart = styled.div`
  ${dropdown.container};
  width: 280px;
  z-index: 1;
  display: flex;
  flex-direction: column;
`

const Heading = styled.h4`
  font-family: ${fonts.dosis};
  ${dropdown.heading};
`

const Divider = styled.div`
  ${dropdown.divider};
`

// const Checkout = styled.a`
//   ${button.default};
//   ${button.big};
//   ${button.purple};
// `

export const CostBlock = styled.div`
  font-family: ${fonts.dosis};
  font-size: 0.875rem;
  margin: ${spacing.sm}px 0;
  text-align: right;
  position: relative;

  ::before {
    background-color: ${colors.lightest}dd;
    bottom: 0;
    content: '';
    display: block;
    left: 0;
    opacity: ${props => (props.isLoading ? 1 : 0)};
    position: absolute;
    top: 0;
    transition: opacity 0.5s ease;
    right: 0;
    z-index: 2;
  }
`

export const PriceBox = styled.span`
  display: inline-block;
  width: 75px;
`

export const CostDetails = styled.p`
  margin: 0;
`

export const CostTotal = styled.p`
  color: ${colors.brand};
  font-weight: bold;
  margin: 0;
`

// const CurrencyText = styled(Text)`
//   color: ${colors.textLight};
//   font-size: 0.75rem;
//   text-align: center;
// `;

const CloseCartButton = styled.button`
  ${button.link};
  border-bottom: 0;
  color: ${colors.lilac};
  float: right;
  height: 20px;
  text-align: center;
  width: 40px;
  font-size: 1rem;
  &:hover {
    color: red;
  }
`

const ContinueShopping = styled.p`
  color: ${colors.lilac};
  font-size: 0.875rem;
  text-align: center;
`

const ContinueShoppingLink = styled.button`
  ${button.link};
`

class OpenCartComp extends React.Component {
  state = {
    isLoading: false,
  }

  render() {
    return (
      <CartContext.Consumer>
        {({
          isCartOpen,
          checkout,
          toggleCart,
          removeLineItem,
          // updateLineItem,
        }) => {
          // const setCartLoading = bool => this.setState({ isLoading: bool })
          const handleRemove = itemID => event => {
            event.preventDefault()
            removeLineItem(itemID)
          }
          // const handleQuantityChange = lineItemID => async quantity => {
          //   if (!quantity) {
          //     return
          //   }
          //   await updateLineItem(checkout.id, lineItemID, quantity)
          //   setCartLoading(false)
          // }
          return (
            isCartOpen && (
              <OpenCart>
                <Heading>
                  Votre Panier{' '}
                  <CloseCartButton onClick={toggleCart}>
                    &times;
                  </CloseCartButton>
                </Heading>
                <Divider />
                {checkout.lineItems.length > 0 ? (
                  <>
                    {/* <AddedToCart /> */}
                    <ItemList
                      items={checkout.lineItems}
                      handleRemove={handleRemove}
                      // updateQuantity={handleQuantityChange}
                      // setCartLoading={setCartLoading}
                    />
                    <CostBlock>
                      <CostDetails>
                        Sous-total: <PriceBox>{checkout.subtotal}DA</PriceBox>
                      </CostDetails>
                      <CostDetails>
                        Livraison (Alger Uniquement):{' '}
                        <PriceBox>{checkout.livraison} DA</PriceBox>
                      </CostDetails>
                      <CostTotal>
                        Total: <PriceBox>{checkout.totalPrice}DA</PriceBox>
                      </CostTotal>
                    </CostBlock>
                    <Divider />
                    <Link to="/cart" style={{ alignSelf: 'center' }}>
                      <CheckoutButton text="Valider la commande" />
                    </Link>
                    <ContinueShopping>
                      ou{' '}
                      <ContinueShoppingLink onClick={toggleCart}>
                        continuer le shopping
                      </ContinueShoppingLink>
                      !
                    </ContinueShopping>
                    {/* <CurrencyText>
                      All prices in USD. Free shipping worldwide.
                    </CurrencyText> */}
                  </>
                ) : (
                  <EmptyCart />
                )}
              </OpenCart>
            )
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default OpenCartComp
