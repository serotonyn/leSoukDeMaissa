import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, fonts, breakpoints } from '../utils/styles'

const Background = styled.div`
  background: ${props =>
    props.category === 'hommes' ? colors.AntiFlashWhite : colors.whiteSmoke};
  position: relative;
`

const Image = styled(Img)`
  margin: 0 auto;
`
const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
  margin-top: 17px;
  font-family: ${fonts.monospace};
  color: #fff;
  text-shadow: 1px 3px 10px grey;

  & > h1 {
    font-weight: 100;
  }

  @media screen and (min-width: ${breakpoints['650']}px) {
    margin-top: 32px;
  }
`

export const CategoryHero = ({ fluid, category }) => {
  return (
    <Background category={category}>
      <Image fluid={fluid} style={{ maxWidth: 1024 }} />
      <TitleWrapper>
        <h1>{category.replace(/^\w/, c => c.toUpperCase())}</h1>
      </TitleWrapper>
    </Background>
  )
}

CategoryHero.propTypes = {
  fluid: PropTypes.shape({
    base64: PropTypes.string.isRequired,
    aspectRatio: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
  }).isRequired,
  category: PropTypes.string.isRequired,
}

CategoryHero.defaultProps = {
  category: 'Femmes',
  fluid: {
    base64:
      'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB1IcpLAB//8QAGBABAQEBAQAAAAAAAAAAAAAAAgEAAxH/2gAIAQEAAQUCfUi+uvIxTi6xv//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABsQAAICAwEAAAAAAAAAAAAAAAERABACITFR/9oACAEBAAY/AkZrlLIOM+1//8QAGhABAAIDAQAAAAAAAAAAAAAAAREhABAxkf/aAAgBAQABPyEDNLyqwqiHx1DgMZxzIrX/2gAMAwEAAgADAAAAEIQf/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8Qp//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABsQAQEAAgMBAAAAAAAAAAAAAAERABAhMUFx/9oACAEBAAE/EBJMmoXx6xmjHCzs5vo6LUGg+OHgQeIQYa//2Q==',
    aspectRatio: 1.7213375796178343,
    src:
      'http://localhost:8000/static/7fdb689e0091cfdbf93d1caf7bdd3741/8484e/catePageHero.jpg',
    srcSet:
      'http://localhost:8000/static/7fdb689e0091cfdbf93d1caf7bdd3741/6ad16/catePageHero.jpg 200w,\nhttp://localhost:8000/static/7fdb689e0091cfdbf93d1caf7bdd3741/8f1ca/catePageHero.jpg 400w,\nhttp://localhost:8000/static/7fdb689e0091cfdbf93d1caf7bdd3741/8484e/catePageHero.jpg 800w,\nhttp://localhost:8000/static/7fdb689e0091cfdbf93d1caf7bdd3741/4a36f/catePageHero.jpg 1081w',
    sizes: '(max-width: 800px) 100vw, 800px',
  },
}
