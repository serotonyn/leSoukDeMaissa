import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, fonts } from '../utils/styles'

const DropdownWrapper = styled.div`
  width: 342px;
  height: 43px;
  background: ${props =>
    props.category === 'hommes' ? colors.AntiFlashWhite : colors.whiteSmoke};
  font-family: ${fonts.dosis};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  & > div:nth-of-type(2) {
    transform: rotate(-90deg);
  }
`

export const Dropdown = ({ text, category }) => {
  return (
    <DropdownWrapper category={category}>
      <div>{text}</div>
      <div>&lt;</div>
    </DropdownWrapper>
  )
}

Dropdown.propTypes = {
  text: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}
Dropdown.defaultProps = {
  text: 'Marques',
  category: 'femmes',
}
