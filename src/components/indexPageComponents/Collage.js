import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import { breakpoints } from '../../utils/styles'
import { Capital } from '../indexPageComponents/Capital'

const CollageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1284px;
`
const LeftFigure = styled.figure`
  display: none;
  & > .picture {
    margin-right: 0.25rem;
  }
  @media screen and (min-width: ${breakpoints[768]}px) {
    width: 30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`
const RightFigure = styled.figure`
  display: none;
  & > .picture {
    margin-left: 0.25rem;
  }
  @media screen and (min-width: ${breakpoints[768]}px) {
    width: 30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`

const MiddleSection = styled.section`
  width: 70%;
  &.text {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0em;
    text-align: center;
    font-weight: 300;
  }
  & > .twoPicsInTheMiddle {
    display: flex;
    margin-bottom: 4rem;
    & .picture_middle {
      width: 100%;
      height: 7.5rem;
    }
  }
  .picture_middle + .picture_middle {
    margin-left: 0.25rem;
  }
  @media screen and (min-width: ${breakpoints[768]}px) {
    width: 40%;
    & > .twoPicsInTheMiddle .picture_hidden {
      display: none;
    }
    & > .twoPicsInTheMiddle {
      margin-bottom: 2rem;
    }
  }
`

const Picture = styled.div`
  height: 9.75rem;
  background-position: 50%;
  background-size: auto 176px;
  background-repeat: no-repeat;
  margin-bottom: 0.25rem;
  position: relative;

  &.picture__60 {
    width: calc(60% - 0.5rem);
  }
  &.picture__40 {
    width: 77%;
  }
  &.hideOnMedium {
    display: none;
  }
  &.expandOnMedium {
    width: 100%;
  }

  @media screen and (min-width: ${breakpoints[992]}px) {
    &.picture__40 {
      width: 40%;
    }
    &.hideOnMedium {
      display: block;
    }
  }
`

const getFluidFromEdges = (edges, num) => edges[num].node.childImageSharp.fluid

export const Collage = () => {
  return (
    <StaticQuery
      query={query}
      render={({ collageImages: { edges = [] } = {} }) => {
        return (
          <CollageWrapper>
            <LeftFigure>
              <Picture className="picture picture__60 hideOnMedium picture_1">
                <GatsbyImage fluid={getFluidFromEdges(edges, 0)} />
              </Picture>
              <Picture className="picture picture__40 expandOnMedium picture_2">
                <GatsbyImage fluid={getFluidFromEdges(edges, 1)} />
              </Picture>
              <Picture className="picture picture__40 picture_3">
                <GatsbyImage fluid={getFluidFromEdges(edges, 2)} />
              </Picture>
              <Picture className="picture picture__40  picture_4">
                <GatsbyImage fluid={getFluidFromEdges(edges, 3)} />
              </Picture>
              <Picture className="picture picture__60 hideOnMedium picture_5">
                <GatsbyImage fluid={getFluidFromEdges(edges, 4)} />
              </Picture>
              <Picture className="picture picture__40 hideOnMedium picture_6">
                <GatsbyImage fluid={getFluidFromEdges(edges, 5)} />
              </Picture>
            </LeftFigure>
            <MiddleSection>
              <div className="twoPicsInTheMiddle">
                <Picture className="picture picture_middle picture_7">
                  <GatsbyImage fluid={getFluidFromEdges(edges, 6)} />
                </Picture>
                <Picture className="picture picture_middle picture_8">
                  <GatsbyImage fluid={getFluidFromEdges(edges, 7)} />
                </Picture>
                <Picture className="picture picture_middle picture_hidden">
                  <GatsbyImage fluid={getFluidFromEdges(edges, 8)} />
                </Picture>
              </div>
              <Capital />
            </MiddleSection>
            <RightFigure className="right">
              <Picture className="picture picture__40 expandOnMedium picture_9">
                <GatsbyImage fluid={getFluidFromEdges(edges, 9)} />
              </Picture>
              <Picture className="picture picture__60 hideOnMedium picture_10">
                <GatsbyImage fluid={getFluidFromEdges(edges, 10)} />
              </Picture>
              <Picture className="picture picture__40 picture_11">
                <GatsbyImage fluid={getFluidFromEdges(edges, 11)} />
              </Picture>
              <Picture className="picture picture__40 hideOnMedium picture_12">
                <GatsbyImage fluid={getFluidFromEdges(edges, 12)} />
              </Picture>
              <Picture className="picture picture__40 picture_13">
                <GatsbyImage fluid={getFluidFromEdges(edges, 13)} />
              </Picture>
              <Picture className="picture picture__60 hideOnMedium picture_14">
                <GatsbyImage fluid={getFluidFromEdges(edges, 14)} />
              </Picture>
            </RightFigure>
          </CollageWrapper>
        )
      }}
    />
  )
}

const query = graphql`
  {
    collageImages: allFile(
      filter: { relativePath: { glob: "collage-images/*" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
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
  height: 100%;
`
