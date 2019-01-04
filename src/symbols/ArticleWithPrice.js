import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { breakpoints, colors, fonts } from '../utils/styles'
import StoreContext from '../context/cartContext'
import { Link } from 'gatsby'

const ArticleWrapper = styled.div`
  width: 372px;
  height: 379px;
  background: ${colors.grey};
  text-align: center;
  position: relative;
  overflow: hidden;

  & > a {
    text-decoration: none;
    color: #000;
  }

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
  @media screen and (min-width: ${breakpoints[650]}px) {
    width: 405px;
  }
  @media screen and (min-width: ${breakpoints[992]}px) {
    width: 305px;
  }
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

export class ArticleWithPrice extends React.Component {
  render() {
    const { fluid, category, id, title, price, brand } = this.props
    return (
      <StoreContext.Consumer>
        {context => (
          <ArticleWrapper>
            <Link to={`/${category}/${id}`}>
              <GatsbyImage fluid={fluid} />
              <ProductName>{title}</ProductName>
              <ProductBrand>{brand}</ProductBrand>
              <AvailibiltyVoyant />
              <PriceTag category={category}>{price} Da</PriceTag>
            </Link>
          </ArticleWrapper>
        )}
      </StoreContext.Consumer>
    )
  }
}

ArticleWithPrice.propTypes = {
  fluid: PropTypes.shape({
    base64: PropTypes.string.isRequired,
    aspectRatio: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
  }),
  category: PropTypes.string.isRequired,
}

ArticleWithPrice.defaultProps = {
  fluid: {
    aspectRatio: 1,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAErElEQVQ4y3WUe0ybVRTAvwJOjdFMls2ICxvyfoi0jEd5FWiBNi0IrJW2FCgrpfRF7Ur5KC1Qnm15P8b7MZnIQobOTUBZ4qYxykw0i/8Y9seMOhMTTIyPqAlt77Hf5aEmcPIl59z7nfO759ycewjCJwv2FkoR8OsOIePx/Ij/CJ+THbB+Yylgsq/bXyx8LeCvxw9oB/+ypGLa3zs72N66v7W3WZjLxvrRF58eQowdnWnsAm45cYxIyiS89kaL4GD9+R+/YX2/Tk8QqU8+Q/y0sUqt8cmGanljHSsH1BnZwGWztwQFue1rK1d1V0dcuupykVUoLNkwN5hhYngUtPr6XipGGpNA+wqAyM/n7p3g0uv9KT1qay5dnZ6CUY0OnE02t8NuAVVlKayvXoNu62XQqeXgMKhgqPiid6HHCZubm/BwfIqBS357ee+q2FExBPjolAhz2HfvbHwIMxNTu9Nt7WhaUevhMVJ2H377ndtus3uy6cm7cq7AbZXI0EiDeXfb1gYfGBvmqNjtoot+KqmMIApCQjGsKvj8CU5wyJd1YinM9w+5u1hsKL+QglqFZWiysws5VRo0aLUheQYL9dta4E2dYfemvQNIrf57X/jTFCOPmbFXcvP5UJzuwnOBkRZ60u91Ehm4GkkvKa0AIz0J2aLjQREeDZ30ZFTvswfoyZ4bZhIaa+vcmZmsIiqWtDT7BRIBBJF+9hyGpp46g++R90IQOzMkDNUmpwH5aiJaLCuHd0wkzIllsOkagDmDyTtDWqGLXbATS2ekUjHL4xOHrUQUh0UQFS9H4HtsiGdgqDw8qosqeZbN9cyq9WhpdgEmBodhbek6clrt3pm+IeiQVBRTvoMqzRMHrLR4+p4xHB6N9VirHQPnnX2V475s2ioVnj6RFM0XiWBxbAJGtG+grsQ0z9rqTfj58Y85lO9n9z7xp5JJYlwguplZ/zYr98WzRKdEhoEdJUJdu94Ii1MznmZzEzKyOKCtrgGdSAyV9GR3aYkQbJJykvJVGYz+9v2E/ieR4RFEa3Q8BjpDo6qVqZmgMRg90lcSkCroHAjOBMGl4FA0EBbjNp1+Ceaz2MuUr/Lkab8NoeToJ6VKZmIgycoVFYRFQtKzJ709cQy0zOHDQHY+zHEL0bix0TOgUENva9td/LIyOTRHX+/RwP50Fm6fsTwe2x6bANaoOGTX6JG6gQS1wQgVihognS5PlbkJBmfnHuyH0e7dun00sLpKjoFKpZJZIZVBsUiMFHo9MlqsMDw5Dc2OXnTnvfc9b03NwkfO/m8O4j5Wqo+ZIty90SVKS8+p02iBXyb2OnucaLnbAWuXamHFYEK3uYXuW/wSuF6r2daaSNwyV0rKjgbWKmrwHVZVyuu7rFboMTWAk8v3tjFS3B2+N+xKY3mHfeX2+TrgcmX1n9NJ6UGU/1BOPu1IoLmkFGdoEb0uUHPyHpli4n6x8QvBUqOCwWYrGH1tUy8o/kGbmvF1f2bu3Hps4inK/11mNu242Um02NvwzxO+LyI0LEQpKOQYefz2FYejXscVsMinng/0zabDqT4WFXcsixheuoZ1q8t5/In7kpPC9BsLj8H2SBLzcP8fBc/1wJgw8rwAAAAASUVORK5CYII=',
    sizes: '(max-width: 405px) 100vw, 405px',
    src:
      'https://5c2de246f5f7f00008df9914--trusting-keller-1e35de.netlify.com/static/981a72e0506b6118284200a0a6d821d9/7937a/pull_moza.png',
    srcSet:
      'https://5c2de246f5f7f00008df9914--trusting-keller-1e35de.netlify.com/static/981a72e0506b6118284200a0a6d821d9/ea2c8/pull_moza.png 200w,\nhttps://5c2de246f5f7f00008df9914--trusting-keller-1e35de.netlify.com/static/981a72e0506b6118284200a0a6d821d9/8bac0/pull_moza.png 400w,\nhttps://5c2de246f5f7f00008df9914--trusting-keller-1e35de.netlify.com/static/981a72e0506b6118284200a0a6d821d9/7937a/pull_moza.png 405w',
  },
  category: 'femmes',
  title: 'veste',
  price: 4852,
  brand: 'Zara',
}
