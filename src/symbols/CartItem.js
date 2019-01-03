import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { fonts, colors, breakpoints } from '../utils/styles'

const Wrapper = styled.div`
  display: flex;
  width: 348px;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: ${breakpoints[650]}px) {
    width: 420px;
  }
  @media screen and (min-width: ${breakpoints[992]}px) {
    width: 576px;
  }
`
const Thumb = styled.div`
  background-color: ${colors.grey};
`
const QtyText = styled.span`
  font-family: ${fonts.dosis};
  margin-right: 10px;
`
const QtyValue = styled.span`
  font-family: ${fonts.monospace};
  padding: 4px 10px;
  border: 1px solid ${colors.gainsboro};
`
const Title = styled.div`
  font-family: ${fonts.monospace};
`
const Brand = styled.div`
  font-family: ${fonts.dosis};
`
const Price = styled.div`
  font-family: ${fonts.monospace};
`

const X = styled.span`
  cursor: pointer;
`

class CartItem extends React.Component {
  removeHandler = event => {
    // this.props.setCartLoading(true)
    this.props.handleRemove(event)
  }
  render() {
    const {
      product: { fixed, title, brand, price },
    } = this.props
    return (
      <Wrapper>
        <X onClick={this.removeHandler}>&times;</X>
        <Thumb>
          <Img fixed={fixed} />
        </Thumb>
        <div>
          <Title>{title}</Title>
          <Brand>{brand}</Brand>
        </div>
        <div>
          <QtyText>QTY</QtyText>
          <QtyValue>1</QtyValue>
        </div>
        <Price>{price}DA</Price>
      </Wrapper>
    )
  }
}

CartItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    fixed: PropTypes.shape({
      base64: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      srcSet: PropTypes.string.isRequired,
    }),
  }),
}
// CartItem.defaultProps = {
//   fixed: {
//     base64:
//       'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADr0lEQVQ4y22UPY8cNRjHZ28iaE5AcRFBKJfdefHM2B577Hmfvd3NnpaXKERKkZB8AKJEaRA6Ik5EUQoQBQ0NJSXfgjJIiJKGgo6GjgaaVXbP5rH39vaWiyXL3h375+f5Py+OA+PGB3fN4khROwjFdu/7YY8Q1jN7hKJLg4F3yTkdnue7QRDab4OB7xBCnQtj2E3P9mGIdpxXDCn4LkJhuP7t+4E9t7/fd6Io3hxcW2hGECD7cr/vvQWHvve84MXu7htP9vbe/gZF8S9RlPwLFn5GSfzaytrAns/z+iIQ3LUvwqUGXP6LcaHzPNdfPj3Wjx490CljGkWJhkc1gH4Ht/Pz0K2B8UYHAP4KcACI+eF0tDz+4tPF82dPXh4eXl8OvOAEAPMwjAAc/mzOX7nyTu+ChQC0r3AuLoMV/4CFWspCZVmuKJMqjLBKuVAAUvDNQDWsf3LG3zT3kgRvW0lounMKTM0lc0EA0ExZVFrkMGGF/w30BKJr9n8DqL/yKu79z2VigZACE3DZXhSyVJksNE0zXdadnRAsDXLYB/0gnCOE0ldmRpKsgLDeNEBjBU25arqRBbbDCQCH5iEL9APQMEQKdCxW2RFeALqn6z0TSYCeYJyq9mBigQeTma66idFNxzFRIUpOQggcpNBonZP3731yDoipBWKSPjZpARIsAaTa0VQTyvVkdlMXzQFYHusEM4ViukQIa6ig2bp6tjUkqS0tcPPICE5IuqCUK1G2molSl83IpJHGNNMJ4SqK6QJFGDTt31iVoOeOx7fOR5lbIOPyyAiPCVsQylQI1hIAMZ6DpUKnvNQx5iqM00UUE2OhpVy7NnC//urbDZAxaYFClJ97PgLdxAKmihMKQKmyvFZpVuo0qxRKwOXEAKmGs7bMru4P3I9u3d4AIUUssCibYxAc3JNzsGoJli8pl4ssb5ZctoqJRkc4g4fYArSEoKD7q9oP3bqoNsCiaCywqodPKbgoZKUzmCwrdA4J3Y5nmudDmN0iIWIJwJeYZJBC+I7V0I/dOx9uOpZTVp2NUt0cfAziv5Cy+pGL6jeYf9RN/bAZzY6K5jpEeqqp0ZFkS0yljhL+vm0sMXN/eP5gu0GgbHShaUwn09fX+7o7LGU1+Y7y4icIzjzNag2gsfkWJ9l22jDZrJpoNXIuvzvoZaKEzF+VZ1nXbjd+b6sSRNEJAN+OErZngZg7zx5u+qrTNt3Z2lYreNe0IEXrsJQ6w/HUKdvpjqgmbt+LthqBj8jZ/j/0iD3oSbFDQAAAAABJRU5ErkJggg==',
//     width: 65,
//     height: 65,
//     src:
//       'http://localhost:8000/static/f77a12f303d771a3daad9ff05b1a07ea/c9da4/veste_noire.png',
//     srcSet:
//       'http://localhost:8000/static/f77a12f303d771a3daad9ff05b1a07ea/c9da4/veste_noire.png 1x,\nhttp://localhost:8000/static/f77a12f303d771a3daad9ff05b1a07ea/df87f/veste_noire.png 1.5x,\n/static/f77a12f303d771a3daad9ff05b1a07ea/8aed5/veste_noire.png 2x,\n/static/f77a12f303d771a3daad9ff05b1a07ea/f8f47/veste_noire.png 3x',
//   },
//   title: 'Veste Noire',
//   brand: 'Jaqueline Riu',
//   price: '4999 DA',
// }

export default CartItem
