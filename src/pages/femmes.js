import React from 'react'
import { graphql } from 'gatsby'

import { Category } from '../components/pages/Category'

// export default ({ data: { images = [] } = {} }) => {
// prettier-ignore
// const hero = images.edges.filter(edge => edge.node.name === 'hero_femmes')[0].node.childImageSharp.fluid
// // prettier-ignore
// const articles = images.edges.filter(edge => edge.node.name !== 'hero_femmes')

// return <Category category="femmes" hero={hero} articles={articles} />

// }

export default ({data: {hero = {}, posts: {edges = []}= {}} = {}}) => {
const getHero = hero.edges.filter(i => i.node.name === "hero_femmes")[0].node.childImageSharp.fluid
return <Category category="femmes" hero={getHero} articles={edges} />
  // return (<div>hi</div>)
}

export const query = graphql`
  {
    posts: allWordpressPost(
      filter: { categories: { elemMatch: { name: { eq: "femmes" } } } }
    ) {
      edges {
        node {
          id
          title
          content
          featured_media {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    hero: allFile(
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

// export const query = graphql`
//   {
//     images: allFile(
//       filter: { relativePath: { glob: "categoryPage-images/femmes/*" } }
//     ) {
//       edges {
//         node {
//           id
//           name
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `
