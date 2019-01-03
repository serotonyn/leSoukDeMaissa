import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import { TileCategory } from '../../symbols/TileCategory'
import { breakpoints } from '../../utils/styles'

const TilesCategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > a {
    text-decoration: none;
  }
  & > a:not(:last-child) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${breakpoints[768]}px) {
    flex-direction: row;
    justify-content: center;
    & > a:not(:last-child) {
      margin-bottom: 0;
    }
    & > a + a {
      margin-left: 20px;
    }
  }

  @media screen and (min-width: ${breakpoints[992]}px) {
    & > a > div {
      width: 310px;
      height: auto;
    }
    & > a > div + div {
      margin-left: 10px;
    }
    & > a > div > h6 {
      margin-top: 20px;
    }
    & > a > div > p:nth-of-type(1) {
      margin-bottom: 238px;
    }
  }

  @media screen and (min-width: ${breakpoints[1024]}px) {
    & > a > div {
      width: 298px;
      height: auto;
    }
    & > a > div + div {
      margin-left: 40px;
    }
    & > a > div > p:nth-of-type(1) {
      margin-bottom: 218px;
    }
  }

  @media screen and (min-width: ${breakpoints[1284]}px) {
    & > a > div {
      width: 375px;
      height: 415px;
    }
    & > a > div {
      // margin-left: 46px;
    }
    & > a > div > p:nth-of-type(1) {
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
