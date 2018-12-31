import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { fonts } from '../utils/styles'

const PriceWrapper = styled.div`
  font-family: ${fonts.monospace};
  display: flex;
  position: relative;
`

const PriceText = styled.span`
  font-size: 1.5rem;
  margin-right: 6px;
  padding-bottom: 3px;
  border-bottom: 2px solid;
`

const Currency = styled.span`
  font-size: 0.9375rem;
  position: absolute;
  left: 55px;
`

export const Price = ({ text }) => {
  return (
    <PriceWrapper>
      <PriceText>{text}</PriceText>
      <Currency>DA</Currency>
    </PriceWrapper>
  )
}

Price.propTypes = {
  text: PropTypes.string.isRequired,
}
Price.defaultProps = {
  text: '4999',
}
