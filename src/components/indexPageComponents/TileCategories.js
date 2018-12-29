import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import { TileCategory } from '../../symbols/TileCategory'
import { breakpoints } from '../../utils/styles'

const TilesCategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div:not(:last-child) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${breakpoints[768]}px) {
    flex-direction: row;
    justify-content: center;
    & > div:not(:last-child) {
      margin-bottom: 0;
    }
    & > div + div {
      margin-left: 20px;
    }
  }

  @media screen and (min-width: ${breakpoints[992]}px) {
    & > div {
      width: 317px;
      height: auto;
    }
    & > div + div {
      margin-left: 10px;
    }
    & > div > h6 {
      margin-top: 20px;
    }
    & > div > p:nth-of-type(1) {
      margin-bottom: 238px;
    }
  }

  @media screen and (min-width: ${breakpoints[1024]}px) {
    & > div {
      width: 298px;
      height: auto;
    }
    & > div + div {
      margin-left: 40px;
    }
    & > div > p:nth-of-type(1) {
      margin-bottom: 218px;
    }
  }

  @media screen and (min-width: ${breakpoints[1284]}px) {
    & > div {
      width: 375px;
      height: 415px;
    }
    & > div + div {
      margin-left: 46px;
    }
    & > div > p:nth-of-type(1) {
      margin-bottom: 298px;
    }
  }
`

export const TileCategories = () => {
  return (
    <StaticQuery
      query={query}
      render={({ tileCategoriesImages: { edges = [] } = {} }) => {
        // prettier-ignore
        const fluidWomen = edges.filter(e => e.node.name === 'Women')[0].node.childImageSharp.fluid
        // prettier-ignore
        const fluidMen = edges.filter(e => e.node.name === 'Men')[0].node.childImageSharp.fluid
        // prettier-ignore
        const fluidKids = edges.filter(e => e.node.name === 'Kids')[0].node.childImageSharp.fluid
        return (
          <TilesCategoriesWrapper>
            {/* {console.log(edges)} */}
            <TileCategory
              title="FEMMES"
              content="Acturellement des tailles de (Xs - 3X)"
              bottomText="Femmes >>"
              fluid={fluidWomen}
            />
            <TileCategory
              title="HOMMES"
              content="Acturellement des tailles de (Xs - 3X)"
              bottomText="Hommes >>"
              fluid={fluidMen}
            />
            <TileCategory
              title="ENFANTS"
              content="Acturellement des tailles de (Xs - 3X)"
              bottomText="Enfants >>"
              fluid={fluidKids}
            />
          </TilesCategoriesWrapper>
        )
      }}
    />
  )
}

const query = graphql`
  {
    tileCategoriesImages: allFile(
      filter: { relativePath: { glob: "tile-categories-images/*" } }
    ) {
      edges {
        node {
          name
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
