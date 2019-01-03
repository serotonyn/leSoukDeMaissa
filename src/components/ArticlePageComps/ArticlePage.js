import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ArticleWithPagination } from '../../symbols/ArticleWithPagination'
import { DomeAttribute } from '../../symbols/DomeAttribute'
import { Price } from '../../symbols/Price'
// import { CheckoutButton } from '../../symbols/CheckoutButton'
import { breakpoints, fonts, colors } from '../../utils/styles'
import AddToCart from './AddToCart'

const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
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
  font-weight: 100;

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
  // max-width: 512px;

  @media screen and (min-width: ${breakpoints[992]}px) {
    & > div:nth-child(2) {
      margin-bottom: 80px;
    }
    & > div:nth-child(3) {
      margin-bottom: 40px;
    }
  }
`

export const ArticlePage = ({
  product: { id, title, price, size, brand, color },
  fluid,
  fixed,
}) => {
  const productWithFixed = { id, title, price, size, brand, color, fixed }
  return (
    <Wrapper>
      <ArticleWithPagination fluid={fluid} />
      <Right>
        <DetailsOn992>
          <ProductName>{title}</ProductName>
          <ProductBrand>{brand}</ProductBrand>
          <AvailibiltyVoyant />
        </DetailsOn992>
        <PriceWrapper>
          <Price text={String(price)} />
        </PriceWrapper>
        <Domes>
          <DomeAttribute title="Taille" value={size} />
          <DomeAttribute title="Couleur" value={color} />
        </Domes>
        <CheckoutButtonWrapper>
          <AddToCart product={productWithFixed} />
        </CheckoutButtonWrapper>
      </Right>
    </Wrapper>
  )
}

ArticlePage.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }),
}

ArticlePage.defaultProps = {
  product: {
    title: 'Veste Noire',
    brand: 'Jaqueline Riu',
    price: 8888,
    size: 'M',
    color: 'Noir',
  },
}
