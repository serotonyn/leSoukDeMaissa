import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import logo from '../../assets/logo.svg'
import { breakpoints, fonts } from '../../utils/styles'
import { MenuItem } from '../../symbols/MenuItem'
import Cart from '../shared/Cart/Cart'

const Wrapper = styled.div`
  border-bottom: 1px solid gainsboro;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 1;
`
const MaxWidth = styled.div`
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
  // padding-top: 10px;
  // padding-bottom: 10px;

  max-width: 1284px;
  display: flex;
  justify-content: space-around;
  margin: 2px auto;
  align-items: center;
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
  & > div {
    margin-left: 14px;
  }
`
const Right = styled.div`
  display: none;
  & > div {
    margin-left: 14px;
  }

  @media screen and (min-width: ${breakpoints[992]}px) {
    display: flex;
  }
`

const MenuMobileToggle = styled.span`
  cursor: pointer;
  @media screen and (min-width: ${breakpoints[992]}px) {
    display: none;
  }
`

const MobileMenu = styled.div`
  font-family: ${fonts.dosis};
  position: absolute;
  left: 0;
  top: ${props => (props.isOpen ? '2rem' : '-12rem')};
  background: white;
  width: 100%;
  transition: top 400ms;
  border-bottom: 1px solid lightgrey;
  ul {
    list-style: none;
    padding: 0;
    padding-left: 20px;
  }
  li {
    margin: 20px 0;
  }
  @media screen and (min-width: ${breakpoints[992]}px) {
    display: none;
  }
`

const MenuFixedPlaceHolder = styled.div`
  height: 40px;
`

export class Menu extends React.Component {
  state = {
    isMobilMenuOpen: false,
  }

  handleToggleMobileMenu = () => {
    this.setState(state => ({ isMobilMenuOpen: !state.isMobilMenuOpen }))
  }
  render() {
    return (
      <>
        <MenuFixedPlaceHolder>
          <MobileMenu isOpen={this.state.isMobilMenuOpen}>
            <ul>
              <li>FAQ</li>
              <li>Code Promo</li>
            </ul>
          </MobileMenu>
        </MenuFixedPlaceHolder>

        <Wrapper>
          <MaxWidth>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <MenuWrapper>
              <Left>
                <MenuItem text="Femmes" />
                <MenuItem text="Hommes" />
                <MenuItem text="Enfants" />
              </Left>
              <Right>
                {/* <MenuItem text="Style Guide" /> */}
                <MenuItem text="FAQ" />
                <MenuItem text="Code Promo" />
              </Right>
            </MenuWrapper>
            <Cart />
            <MenuMobileToggle onClick={this.handleToggleMobileMenu}>
              &#9776;
            </MenuMobileToggle>
          </MaxWidth>
        </Wrapper>
      </>
    )
  }
}
