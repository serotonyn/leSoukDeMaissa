import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ArticleWithPagination } from '../../symbols/ArticleWithPagination'
import { DomeAttribute } from '../../symbols/DomeAttribute'
import { Price } from '../../symbols/Price'
import { CheckoutButton } from '../../symbols/CheckoutButton'
import { breakpoints, fonts, colors } from '../../utils/styles'

const Wrapper = styled.div`
  & > div:first-child {
    margin-bottom: 15px;
  }
  & > div:nth-child(2) {
    margin-bottom: 28px;
  }

  @media screen and (min-width: ${breakpoints[992]}px) {
    display: flex;
    & > div:first-child {
      margin-bottom: 0px;
      flex: 1;
    }
    & > div:nth-child(2) {
      margin-bottom: 0px;
      flex: 1;
    }
  }
`

const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 29px;
`

const Domes = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 26px;
  @media screen and (min-width: ${breakpoints[650]}px) {
    position: relative;
    top: -93px;
  }
  @media screen and (min-width: ${breakpoints[992]}px) {
    position: static;
    top: 0;
  }
`

const CheckoutButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: ${breakpoints[650]}px) {
    position: relative;
    top: -83px;
  }
  @media screen and (min-width: ${breakpoints[992]}px) {
    position: static;
    top: 0;
  }
`
const DetailsOn992 = styled.div`
  text-align: center;
  margin-bottom: 29px;
  @media screen and (max-width: 991px) {
    display: none;
  }
`
const ProductName = styled.h3`
  font-family: ${fonts.monospace};
  font-weight: 100;

  @media screen and (min-width: ${breakpoints[992]}px) {
    font-size: 2.125rem;
  }
`
const ProductBrand = styled.h4`
  font-family: ${fonts.dosis};

  @media screen and (min-width: ${breakpoints[992]}px) {
    font-size: 1.6875rem;
  }
`
const AvailibiltyVoyant = styled.div`
  width: 7px;
  height: 7px;
  background: ${colors.mediumTurquise};
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 0px;
  border-radius: 6px;
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: ${breakpoints[992]}px) {
    & > div:nth-child(2) {
      margin-bottom: 80px;
    }
    & > div:nth-child(3) {
      margin-bottom: 40px;
    }
  }
`

export const ArticlePage = () => {
  return (
    <Wrapper>
      <ArticleWithPagination />
      <Right>
        <DetailsOn992>
          <ProductName>Veste Grise</ProductName>
          <ProductBrand>Zara</ProductBrand>
          <AvailibiltyVoyant />
        </DetailsOn992>
        <PriceWrapper>
          <Price text="3999" />
        </PriceWrapper>
        <Domes>
          <DomeAttribute title="Taille" value="M" />
          <DomeAttribute title="Couleur" value="Noire" />
        </Domes>
        <CheckoutButtonWrapper>
          <CheckoutButton text="Ajouter Au Panier" />
        </CheckoutButtonWrapper>
      </Right>
    </Wrapper>
  )
}

ArticlePage.propTypes = {}
