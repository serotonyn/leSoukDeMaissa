import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { breakpoints, colors, fonts } from '../utils/styles'
import { ArticlePagination } from './ArticlePagination'
// import { Price } from './Price'
// import { DomeAttribute } from './DomeAttribute'

const ArticleWrapper = styled.div`
  width: 100%;
  height: 399px;
  background: ${colors.grey};
  text-align: center;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: ${breakpoints[650]}px) {
    // width: 490px;
    height: 499px;
  }
  @media screen and (min-width: ${breakpoints[992]}px) {
    // width: 50%;
    // height: 499px;
  }
`

const GatsbyImage = styled(Img)`
  width: 305px;
  margin: 0 auto;
  margin-top: 24px;
  @media screen and (min-width: ${breakpoints[650]}px) {
    width: 405px;
  }
  @media screen and (min-width: ${breakpoints[992]}px) {
    margin-top: 20px;
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
  border-radius: 6px;
`

export const Details = styled.div`
  text-align: center;
  position: absolute;
  bottom: 4%;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: ${breakpoints[992]}px) {
    // position: static;
    // bottom: 0;
    // left: 0;
    // transform: translateX(0%);
    // flex: 1;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    display: none;
  }
`
const Wrapper = styled.div`
  position: relative;

  @media screen and (min-width: ${breakpoints[992]}px) {
    display: flex;
    // max-width: 512px;
  }
`
const ArticleAndPagination = styled.div`
  @media screen and (min-width: ${breakpoints[992]}px) {
    flex: 1;
    position: relative;
  }
`

export const ArticleWithPagination = ({ fluid, category }) => {
  return (
    <Wrapper>
      <ArticleAndPagination>
        <ArticlePagination />
        <ArticleWrapper>
          <GatsbyImage fluid={fluid} />
        </ArticleWrapper>
      </ArticleAndPagination>
      <Details>
        <ProductName>Veste Grise</ProductName>
        <ProductBrand>Zara</ProductBrand>
        <AvailibiltyVoyant />
      </Details>
    </Wrapper>
  )
}

ArticleWithPagination.propTypes = {
  fluid: PropTypes.shape({
    base64: PropTypes.string.isRequired,
    aspectRatio: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
  }),
  category: PropTypes.string.isRequired,
}

ArticleWithPagination.defaultProps = {
  fluid: {
    aspectRatio: 1,
    base64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAErElEQVQ4y3WUe0ybVRTAvwJOjdFMls2ICxvyfoi0jEd5FWiBNi0IrJW2FCgrpfRF7Ur5KC1Qnm15P8b7MZnIQobOTUBZ4qYxykw0i/8Y9seMOhMTTIyPqAlt77Hf5aEmcPIl59z7nfO759ycewjCJwv2FkoR8OsOIePx/Ij/CJ+THbB+Yylgsq/bXyx8LeCvxw9oB/+ypGLa3zs72N66v7W3WZjLxvrRF58eQowdnWnsAm45cYxIyiS89kaL4GD9+R+/YX2/Tk8QqU8+Q/y0sUqt8cmGanljHSsH1BnZwGWztwQFue1rK1d1V0dcuupykVUoLNkwN5hhYngUtPr6XipGGpNA+wqAyM/n7p3g0uv9KT1qay5dnZ6CUY0OnE02t8NuAVVlKayvXoNu62XQqeXgMKhgqPiid6HHCZubm/BwfIqBS357ee+q2FExBPjolAhz2HfvbHwIMxNTu9Nt7WhaUevhMVJ2H377ndtus3uy6cm7cq7AbZXI0EiDeXfb1gYfGBvmqNjtoot+KqmMIApCQjGsKvj8CU5wyJd1YinM9w+5u1hsKL+QglqFZWiysws5VRo0aLUheQYL9dta4E2dYfemvQNIrf57X/jTFCOPmbFXcvP5UJzuwnOBkRZ60u91Ehm4GkkvKa0AIz0J2aLjQREeDZ30ZFTvswfoyZ4bZhIaa+vcmZmsIiqWtDT7BRIBBJF+9hyGpp46g++R90IQOzMkDNUmpwH5aiJaLCuHd0wkzIllsOkagDmDyTtDWqGLXbATS2ekUjHL4xOHrUQUh0UQFS9H4HtsiGdgqDw8qosqeZbN9cyq9WhpdgEmBodhbek6clrt3pm+IeiQVBRTvoMqzRMHrLR4+p4xHB6N9VirHQPnnX2V475s2ioVnj6RFM0XiWBxbAJGtG+grsQ0z9rqTfj58Y85lO9n9z7xp5JJYlwguplZ/zYr98WzRKdEhoEdJUJdu94Ii1MznmZzEzKyOKCtrgGdSAyV9GR3aYkQbJJykvJVGYz+9v2E/ieR4RFEa3Q8BjpDo6qVqZmgMRg90lcSkCroHAjOBMGl4FA0EBbjNp1+Ceaz2MuUr/Lkab8NoeToJ6VKZmIgycoVFYRFQtKzJ709cQy0zOHDQHY+zHEL0bix0TOgUENva9td/LIyOTRHX+/RwP50Fm6fsTwe2x6bANaoOGTX6JG6gQS1wQgVihognS5PlbkJBmfnHuyH0e7dun00sLpKjoFKpZJZIZVBsUiMFHo9MlqsMDw5Dc2OXnTnvfc9b03NwkfO/m8O4j5Wqo+ZIty90SVKS8+p02iBXyb2OnucaLnbAWuXamHFYEK3uYXuW/wSuF6r2daaSNwyV0rKjgbWKmrwHVZVyuu7rFboMTWAk8v3tjFS3B2+N+xKY3mHfeX2+TrgcmX1n9NJ6UGU/1BOPu1IoLmkFGdoEb0uUHPyHpli4n6x8QvBUqOCwWYrGH1tUy8o/kGbmvF1f2bu3Hps4inK/11mNu242Um02NvwzxO+LyI0LEQpKOQYefz2FYejXscVsMinng/0zabDqT4WFXcsixheuoZ1q8t5/In7kpPC9BsLj8H2SBLzcP8fBc/1wJgw8rwAAAAASUVORK5CYII=',
    sizes: '(max-width: 405px) 100vw, 405px',
    src:
      'http://localhost:8000/static/981a72e0506b6118284200a0a6d821d9/7937a/pull_moza.png',
    srcSet:
      'http://localhost:8000/static/981a72e0506b6118284200a0a6d821d9/ea2c8/pull_moza.png 200w,\nhttp://localhost:8000/static/981a72e0506b6118284200a0a6d821d9/8bac0/pull_moza.png 400w,\nhttp://localhost:8000/static/981a72e0506b6118284200a0a6d821d9/7937a/pull_moza.png 405w',
  },
  category: 'femmes',
}
