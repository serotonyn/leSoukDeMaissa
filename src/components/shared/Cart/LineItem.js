import React from 'react'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import {
  colors,
  spacing,
  // radius,
  input,
  // visuallyHidden,
} from '../../../utils/stylesIsolate'

import { fonts } from '../../../utils/styles'

const Item = styled('li')`
  align-items: center;
  border-bottom: 1px solid ${colors.brandLight};
  display: flex;
  margin: 0;
  margin-left: -${spacing.sm}px;
  margin-right: -${spacing.sm}px;
  padding: ${spacing.sm}px;

  :nth-child(2n + 2) {
    background-color: ${colors.brandLighter};
  }
`

// const Thumb = styled(ProductImage)`
//   border-radius: ${radius.default}px;
//   box-sizing: border-box;
//   display: inline-block;
//   height: 40px;
//   margin: 0 ${spacing.sm}px 0 0;
//   width: 40px;
// `;

const ItemInfo = styled('p')`
  flex: 2 40%;
  margin: 0;
`

const Name = styled('strong')`
  display: block;
  font-size: 0.875rem;
  font-family: ${fonts.monospace};
`

const MetaData = styled('em')`
  font-family: ${fonts.dosis};
  color: ${colors.lilac};
  display: block;
  font-size: 0.75rem;
  font-style: normal;
`

const inputStyles = css`
  ${input.default};
  width: 100%;

  :focus {
    ${input.focus};
  }

  @media (min-width: 650px) {
    ${input.small};
  }
`

// const labelStyles = css`
//   ${visuallyHidden};
// `

// const HiddenLabel = styled('label')`
//   ${labelStyles};
// `

const Quantity = styled('p')`
  ${inputStyles};
  margin-right: ${spacing.xs}px;
  max-width: calc(20% - ${spacing.xs}px);
`

const Remove = styled('a')`
  border-radius: 50%;
  color: ${colors.lilac};
  height: 20px;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  transition: all 0.15s ease-in-out;
  width: 20px;

  :hover {
    background: ${colors.brand};
    color: ${colors.brandLighter};
  }
`

// Add our own debounce utility so we don’t need to load a lib.
// const debounce = (delay, fn) => {
//   let timeout

//   return function(...args) {
//     if (timeout) {
//       clearTimeout(timeout)
//     }

//     timeout = setTimeout(() => {
//       fn(...args)
//       timeout = null
//     }, delay)
//   }
// }

class LineItem extends React.Component {
  state = {
    quantity: this.props.item.quantity || 1,
  }

  // inputChangeHandler = event => {
  //   const target = event.target
  //   const value = target.value

  //   this.setState({ quantity: value })
  //   this.props.setCartLoading(true)
  //   this.debouncedUpdateQuantity(value)
  // }

  // debouncedUpdateQuantity = debounce(500, quantity =>
  //   this.props.updateQuantity(quantity)
  // )

  removeHandler = event => {
    // this.props.setCartLoading(true)
    this.props.handleRemove(event)
  }

  // componentWillUnmount() {
  //   this.props.setCartLoading(false)
  // }

  render() {
    const { item } = this.props
    return (
      <Item>
        <Img fixed={item.fixed} />
        {/* <Thumb
          id={item.variant.image.id}
          fallback={item.variant.image.src}
          alt={item.variant.image.altText}
        /> */}
        <ItemInfo>
          <Name>{item.title}</Name>
          <MetaData>
            {item.brand}, {item.price}DA
          </MetaData>
        </ItemInfo>
        {/* <HiddenLabel htmlFor={`quantity_${item.id.substring(58, 64)}`}>
          Quantity:
        </HiddenLabel> */}
        <Quantity>1</Quantity>
        <Remove
          href="#remove"
          title="Remove this item from your cart."
          onClick={this.removeHandler}
        >
          &times;
        </Remove>
      </Item>
    )
  }
}

export default LineItem
