import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { breakpoints, colors, fonts } from '../utils/styles'

const ArticleWrapper = styled.div`
  width: 372px;
  height: 379px;
  background: ${colors.grey};
  text-align: center;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: ${breakpoints[650]}px) {
    width: 490px;
    height: 499px;
  }
  @media screen and (min-width: ${breakpoints[992]}px) {
    width: 372px;
    height: 379px;
  }
`

const GatsbyImage = styled(Img)`
  width: 305px;
  margin: 0 auto;
`

const ProductName = styled.h3`
  font-family: ${fonts.monospace};
  font-weight: 100;
`
const ProductBrand = styled.h4`
  font-family: ${fonts.dosis};
`
const AvailibiltyVoyant = styled.div`
  width: 7px;
  height: 7px;
  background: ${colors.mediumTurquise};
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 6px;
`
const PriceTag = styled.div`
  background: ${props =>
    props.category === 'hommes' ? colors.platinium : colors.gainsboro};
  color: ${props =>
    props.category === 'hommes' ? colors.msuGreen : colors.oldLavender};
  font-family: ${fonts.monospace};
  position: absolute;
  top: 28px;
  right: -132px;
  transform: rotate(40deg);
  width: 100%;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${breakpoints[650]}px) {
    top: 35px;
    right: -178px;
  }
  @media screen and (min-width: ${breakpoints[992]}px) {
    top: 28px;
    right: -132px;
  }
`

export const Article = ({ fluid, category }) => {
  return (
    <div>
      <ArticleWrapper>
        <GatsbyImage fluid={fluid} />
        <ProductName>Veste Grise</ProductName>
        <ProductBrand>Zara</ProductBrand>
        <AvailibiltyVoyant />
        <PriceTag category={category}>4999 Da</PriceTag>
      </ArticleWrapper>
    </div>
  )
}

Article.propTypes = {
  fluid: PropTypes.shape({
    base64: PropTypes.string.isRequired,
    aspectRatio: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
  }),
  category: PropTypes.string.isRequired,
}

Article.defaultProps = {
  fluid: {
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEEUlEQVQ4y5VUy4scRRzu3UkOihBziIboTQhq3DVmZyYzOzvT09PTj+ru6ep3Tz+mZ3oe+8gGPESJqJdcBFHIIRfBPyB4EoMHb0I8iAcRFHJQEETwEMRLyGMf0z+ra2eXXRRZC4r61eP31e/7+utimH9pMtekI1er/GOvfrk8l498rcZM0oQ5duPrtYPYMVrzjUqpWLr42gv5fKW0REHbjZXjgaltno6ffPzhPFutfHZpcfFeo1rNuFrt+9PM/Alaabl0/OpElmWeOnWGxmx1+cs3FhZhpVLdRnwbuNryRr7eXF4uyHzzv4FktsFgJNH44sJCIR8vvPKyeblYBK7eeISRAliWb+XrmigVXKwxqtBm8IzRkcaVi0STOo2FxsqczAuUmshxvqlpgARhl2+wU65aeTVf12X5pMK16HksSUfBAtNgDEWefWF2bn/d1lCJgHytihL4tpWRqrZUUbwVO05x/wziuD1pKoccYWlopl2dgp1/8dwzEtf8AiMESlsARRCnnmVlOqEc2A74pgGGgm7u50tE84P2+OEjpk0sgpHA1GsqXeuIwh3PMAAryq5BOqEHGumWpmWO3tkhe9PAtkGXpBvUVjouPH/6DGMJfI6+5yVyY2FvszPBMsrBtkhS5psmRJ6TeaaZRa6bxZ4HZJy6+YUIPWkuV16iVTZnUpmSQCaNPT0aSycI8D2p1QJTU3eHUQQDv5slvg+OgSHpdqEfBNkgDMHsaNu23gGFb72b5yptvjA08MzIAl+YUdUIIKA2vxs5DgzCbjaOQ+j5bv5RIAfKe+x7GRIF6BCNdUm8m+d+9cPPDEucwjhaizFkZZ5Wi+TbdkcDHcnbwyjYWh8kMOlFWew6EHd9ChY6TuZgDC7Gf2qy9FfXMrYjE5/P8yPbnGNMWaLcLUl4zlKV+wQMbFX9vWubf2yMUuiTahLPhTSOICTAvmVNI6Kja+DfpBZ3O3RssFQ0oH5EYiE3JaVrIRTbqgZtls00gb8+6ffur/YTSMMgGyc9GJNqcw3HSZKtDVMYEAYu1j/3iLZik6UWIrkF5tcff6E6Egt8GxIrkMfgjqtrxZwuoZiN4ni62u9nw6SXkSqztTSlgFfXxjuE7ncO1oF49pscAwAOmVtVDFNBP7Hlpeo4ir2NNIVRFE0nvR6sJv3pgMTjXm8nDcPtYRztrI/SJ8SPDxKiLUbytFYqnaVA5549dQB681pA9dxIEnctSXZXe8nDMakwB10nF6wNBrAxSOHKcATXNjeBMLrb8733bU39tPj64tNH/mcsS4WOd53GH914b/6tK+tnR3F4IbCMsqWq4tXViUYqfJPQ/2DS77+9OR6+M+h6lw5jeJj40CKPAlctz16NNjMKXOb/tMC2Tto6nvOxQed/Aw/JnlJAF1HzAAAAAElFTkSuQmCC',
    aspectRatio: 1,
    src:
      'http://localhost:8000/static/c0599e822505bbe744527ad6aa10842f/c138b/veste_grise-01.png',
    srcSet:
      'http://localhost:8000/static/c0599e822505bbe744527ad6aa10842f/7281e/veste_grise-01.png 200w,\nhttp://localhost:8000/static/c0599e822505bbe744527ad6aa10842f/c138b/veste_grise-01.png 305w',
    sizes: '(max-width: 305px) 100vw, 305px',
  },
  category: 'femmes',
}
