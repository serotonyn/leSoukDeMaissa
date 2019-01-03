import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { fonts, colors } from '../utils/styles'
import cart from '../assets/cart.svg'

const Button = styled.button`
  font-family: ${fonts.dosis};
  font-size: 1rem;
  font-weight: 100;

  width: 173px;
  height: 40px;
  background-color: ${colors.oldLavender};
  color: #fff;

  border-radius: 3px;
  cursor: pointer;
`

const Text = styled.span`
  margin-right: 6px;
`

export const CheckoutButton = ({ text }) => (
  <Button>
    <Text>{text}</Text>
    {text === 'Ajouter Au Panier' && <img src={cart} alt="Votre Panier" />}
  </Button>
)

CheckoutButton.propTypes = {
  text: PropTypes.string.isRequired,
}

CheckoutButton.defaultProps = {
  text: 'Ajouter Au Panier',
}
