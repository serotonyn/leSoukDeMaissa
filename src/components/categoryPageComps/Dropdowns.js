import React from 'react'
import styled from 'styled-components'
import Proptypes from 'prop-types'

import { Dropdown } from '../../symbols/Dropdown'
import { breakpoints } from '../../utils/styles'

const DropdownsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div:first-of-type {
    margin-bottom: 10px;
  }

  @media screen and (min-width: ${breakpoints[1024]}px) {
    flex-direction: row;
    justify-content: space-evenly;
    & > div:first-of-type {
      margin-bottom: 0;
    }
  }
`

export const Dropdowns = ({ category }) => {
  return (
    <DropdownsWrapper>
      <Dropdown text="Marques" category={category} />
      <Dropdown text="Filter: Récents" category={category} />
    </DropdownsWrapper>
  )
}

Dropdowns.propTypes = {
  category: Proptypes.string.isRequired,
}
