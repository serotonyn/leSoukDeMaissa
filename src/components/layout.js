import React from 'react'
import PropTypes from 'prop-types'

import ArticlesContext, {
  defaultArticlesContext,
} from '../context/articlesContext'
import StoreContext, { defaultStoreContext } from '../context/cartContext'
import { calculatePrice } from '../utils/parsing'

class Layout extends React.Component {
  state = {
    store: {
      ...defaultStoreContext,
      toggleCart: () => {
        this.setState(state => ({
          store: { ...state.store, isCartOpen: !state.store.isCartOpen },
        }))
      },
      addToCart: (cartId, product) => {
        const cartCount = Number(this.state.store.cartCount) + 1

        const data = localStorage.getItem('mdata')
        const parsedData = JSON.parse(data)

        let lineItems
        if (parsedData.checkout.lineItems) {
          const isProductAlreadyAdded = parsedData.checkout.lineItems.some(
            p => p.id === product.id
          )
          if (isProductAlreadyAdded) {
            return
          }
          lineItems = [...parsedData.checkout.lineItems, product]
        } else {
          lineItems = [product]
        }
        console.log(this.state.store)

        const subtotal = calculatePrice(lineItems)

        const totalPrice = subtotal + 500

        localStorage.setItem(
          'mdata',
          JSON.stringify({
            cartId,
            cartCount,
            checkout: {
              ...parsedData.checkout,
              lineItems,
              subtotal,
              totalPrice,
            },
          })
        )

        const checkout = {
          ...parsedData.checkout,
          lineItems,
          subtotal,
          totalPrice,
        }

        return this.setState(state => ({
          store: { ...state.store, cartCount, checkout, isCartOpen: true },
        }))
      },
      removeLineItem: id => {
        const cartCount = Number(this.state.store.cartCount) - 1

        const data = localStorage.getItem('mdata')
        const parsedData = JSON.parse(data)
        const lineItems = parsedData.checkout.lineItems.filter(p => p.id !== id)

        const subtotal = calculatePrice(lineItems)
        const totalPrice = subtotal + this.state.store.checkout.livraison

        localStorage.setItem(
          'mdata',
          JSON.stringify({
            cartId: this.state.store.cartId,
            cartCount,
            checkout: {
              ...this.state.store.checkout,
              lineItems,
              subtotal,
              totalPrice,
            },
          })
        )

        const checkout = {
          ...this.state.store.checkout,
          lineItems,
          subtotal,
          totalPrice,
        }
        this.setState(state => ({
          store: { ...state.store, cartCount, checkout },
        }))
      },
    },
    articles: {
      ...defaultArticlesContext,
      filterBrands: value => {
        this.setState(state => ({
          articles: { ...state.articles, selectedBrands: [...value] },
        }))
      },
    },
  }

  componentDidMount() {
    const cartId = localStorage.getItem('mcart')

    // Note: Instead of localStorage you can use moltin api & Moltin.getCartItems(cartId) instead
    const mdata = localStorage.getItem('mdata')

    if ((cartId && !mdata) || !cartId) {
      const cartId = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, () =>
        ((Math.random() * 16) | 0).toString(16)
      )
      localStorage.setItem('mcart', cartId)
      localStorage.setItem(
        'mdata',
        JSON.stringify({
          cartId,
          cartCount: 0,
          checkout: { lineItems: [], livraison: 500 },
        })
      )
      this.setState({
        cartId,
      })
    } else {
      const data = localStorage.getItem('mdata')
      const parsedData = JSON.parse(data)
      this.setState(state => ({
        store: {
          ...state.store,
          cartCount: parsedData.cartCount || 0,
          checkout: parsedData.checkout || [],
        },
      }))
    }
  }

  render() {
    return (
      <StoreContext.Provider value={this.state.store}>
        <ArticlesContext.Provider value={this.state.articles}>
          {this.props.children}
        </ArticlesContext.Provider>
      </StoreContext.Provider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// import { StaticQuery, graphql } from 'gatsby'

// import './layout.css'

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Header siteTitle={data.site.siteMetadata.title} />
//           {children}
//       </>
//     )}
//   />
// )
