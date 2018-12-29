import React from 'react'
import styled from 'styled-components'
// import { Link } from 'gatsby'

import logo from '../../assets/logo.svg'
import { breakpoints } from '../../utils/styles'
import { MenuItem } from '../../symbols/MenuItem'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid gainsboro;
  @media screen and (min-width: ${breakpoints[650]}px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`
const MenuWrapper = styled.nav`
  display: flex;

  align-self: center;
  flex-basis: 73%;
  @media screen and (min-width: ${breakpoints[992]}px) {
    justify-content: space-between;
  }
`

const Left = styled.div`
  display: flex;
  & > div + div {
    margin-left: 14px;
  }
`
const Right = styled.div`
  display: none;
  & > div + div {
    margin-left: 14px;
  }

  @media screen and (min-width: ${breakpoints[992]}px) {
    display: flex;
  }
`

export const Menu = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" />
      <MenuWrapper>
        <Left>
          <MenuItem text="Femmes" />
          <MenuItem text="Hommes" />
          <MenuItem text="Enfants" />
        </Left>
        <Right>
          <MenuItem text="Style Guide" />
          <MenuItem text="FAQ" />
          <MenuItem text="Code Promo" />
        </Right>
      </MenuWrapper>
      <span>&#9776;</span>
    </Wrapper>
  )
}
