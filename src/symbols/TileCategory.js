import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { colors, fonts } from '../utils/styles'

import Img from 'gatsby-image'

const TileCategoryWrapper = styled.div`
  width: 209px;
  height: 231px;
  // background: ${colors.whiteSmoke};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
const GatsbyImage = styled(Img)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;';
  }
`
const Title = styled('h6')`
  font-family: ${fonts.monospace};
  font-size: 1.0625rem;
  margin-top: 5px;
  margin-bottom: 3px;
  line-height: 1;
  font-weight: 100;
`
const Content = styled.p`
  font-family: ${fonts.dosis};
  font-size: 0.875rem;
  width: 115px;
  text-align: center;
  margin-bottom: 146px;
`
const BottomText = styled.p`
  font-family: ${fonts.dosis};
  font-size: 0.875rem;
  color: ${colors.oldLavender};
`

export const TileCategory = ({ title, content, bottomText, fluid }) => (
  <>
    <TileCategoryWrapper>
      <GatsbyImage fluid={fluid} />
      <Title>{title}</Title>
      <Content>{content}</Content>
      <BottomText>{bottomText}</BottomText>
    </TileCategoryWrapper>
  </>
)

TileCategory.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  fluid: PropTypes.shape({
    base64: PropTypes.string.isRequired,
    aspectRatio: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
  }).isRequired,
}
