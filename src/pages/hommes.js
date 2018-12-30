import React from 'react'
import { Category } from '../components/pages/Category'

export default ({ data: { images = [] } = {} }) => {
  // prettier-ignore
  const hero = images.edges.filter(edge => edge.node.name === 'hero_hommes')[0].node.childImageSharp.fluid
  // prettier-ignore
  const articles = images.edges.filter(edge => edge.node.name !== 'hero_hommes')

  return <Category category="hommes" hero={hero} articles={articles} />
}

export const query = graphql`
  {
    images: allFile(
      filter: { relativePath: { glob: "categoryPage-images/hommes/*" } }
    ) {
      edges {
        node {
          id
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
