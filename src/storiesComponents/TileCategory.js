import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { colors, fonts } from '../utils/styles'

import Img from 'gatsby-image'
// import { Link } from 'gatsby'

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
  color: #000;
`
const Content = styled.p`
  font-family: ${fonts.dosis};
  font-size: 0.875rem;
  width: 115px;
  text-align: center;
  margin-bottom: 146px;
  color: #000;
`
const BottomText = styled.p`
  font-family: ${fonts.dosis};
  font-size: 0.875rem;
  color: ${colors.oldLavender};
`

export const TileCategory = ({ title, content, bottomText, fluid }) => (
  <a>
    <TileCategoryWrapper>
      <GatsbyImage fluid={fluid} />
      <Title>{title}</Title>
      <Content>{content}</Content>
      <BottomText>{bottomText}</BottomText>
    </TileCategoryWrapper>
  </a>
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

TileCategory.defaultProps = {
  title: 'FEMMES',
  content: 'jklsda',
  bottomText: 'Femmes >>',
  fluid: {
    base64:
      'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAWABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEEBQP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB25qU42UCvIdQf//EABkQAQADAQEAAAAAAAAAAAAAAAIAARASA//aAAgBAQABBQLfV8kdW4hShFHP/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGRAAAgMBAAAAAAAAAAAAAAAAARAAAhIh/9oACAEBAAY/AmZU6fF//8QAGxABAAICAwAAAAAAAAAAAAAAAQAREGEhMVH/2gAIAQEAAT8hgjjjHZKrWy8EbjagF8lz/9oADAMBAAIAAwAAABB/4IL/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAVEQEBAAAAAAAAAAAAAAAAAAAgIf/aAAgBAgEBPxCj/8QAHBABAQACAwEBAAAAAAAAAAAAAREAIRAxQVFx/9oACAEBAAE/EDXeMQbOEjum78cMzZA8HQfb9wdGImRwud40QaPw84f/2Q==',
    aspectRatio: 0.9033816425120773,
    src:
      'http://localhost:8000/static/5cd4192f3b0ddb1296ec7d274120dca2/9d564/Women.jpg',
    srcSet:
      'http://localhost:8000/static/5cd4192f3b0ddb1296ec7d274120dca2/9a299/Women.jpg 200w,\nhttp://localhost:8000/static/5cd4192f3b0ddb1296ec7d274120dca2/9d564/Women.jpg 374w',
    sizes: '(max-width: 374px) 100vw, 374px',
  },
}
