import React from 'react'
import { Category } from '../components/pages/Category'

export default ({ data: { images = [] } = {} }) => {
  // prettier-ignore
  const hero = images.edges.filter(edge => edge.node.name === 'hero_femmes')[0].node.childImageSharp.fluid
  // prettier-ignore
  const articles = images.edges.filter(edge => edge.node.name !== 'hero_femmes')

  return <Category category="femmes" hero={hero} articles={articles} />
}

export const query = graphql`
  {
    images: allFile(
      filter: { relativePath: { glob: "categoryPage-images/femmes/*" } }
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
