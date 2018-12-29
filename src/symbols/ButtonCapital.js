import React from 'react'
import styled from 'styled-components'
import { button } from '../utils/styles'
import PropTypes from 'prop-types'

const Button = styled.button`
  ${button.capital}
`

export const ButtonCapital = ({ text }) => <Button>{text}</Button>

ButtonCapital.propTypes = {
  text: PropTypes.string.isRequired,
}
