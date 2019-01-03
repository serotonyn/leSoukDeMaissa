import React from 'react'

export const defaultStoreContext = {
  isCartOpen: false,
  cartId: null,
  cartCount: 0,
  addToCart: () => {},
  removeLineItem: () => {},
  checkout: {
    lineItems: [],
    subtotal: 0,
    livraison: 500,
    totalPrice: 0,
  },

  selectedBrands: [],
  filterBrands: () => {},
}

const StoreContext = React.createContext(defaultStoreContext)

export const withStoreContext = Component => {
  return props => (
    <StoreContext.Consumer>
      {context => <Component {...props} storeContext={context} />}
    </StoreContext.Consumer>
  )
}

export default StoreContext
