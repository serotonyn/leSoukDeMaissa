import React from 'react'
import { graphql } from 'gatsby'

import { ArticlePage } from '../components/ArticlePageComps/ArticlePage'
import { parseProduct } from '../utils/parsing'
import { Menu } from '../components/indexPageComponents/Menu'
import Layout from '../components/layout'
import { Footer } from '../components/indexPageComponents/Footer'

const ArticleTemplate = ({ data: { post = {}, images = {} } = {} }) => {
  const parsedPost = parseProduct(post)
  //   const { title, price, size, brand, color } = parsedPost

  const fluid = images.edges[0].node.localFile.childImageSharp.fluid
  const fixed = images.edges[0].node.localFile.childImageSharp.fixed
  return (
    <Layout>
      {/* {console.log(
        JSON.stringify(images.edges[0].node.localFile.childImageSharp.fixed)
      )} */}
      <Menu />
      <ArticlePage product={parsedPost} fluid={fluid} fixed={fixed} />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query currentPost($id: String!, $seekWpMediaByTitleNum: String) {
    post: wordpressPost(id: { eq: $id }) {
      id
      content
      title
      # featured_media {
      #   localFile {
      #     childImageSharp {
      #       fluid {
      #         ...GatsbyImageSharpFluid
      #       }
      #     }
      #   }
      # }
    }
    images: allWordpressWpMedia(
      filter: { title: { glob: $seekWpMediaByTitleNum } }
    ) {
      edges {
        node {
          id
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
              fixed(width: 65) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

export default ArticleTemplate
//     images: allWordpressWpMedia(
//       filter: { title: { glob: $seekWpMediaByTitleNum } }
//     ) {
//       edges {
//         node {
//           id
//           localFile {
//             childImageSharp {
//               fluid {
//                 ...GatsbyImageSharpFluid
//               }
//               fixed(width: 80) {
//                 ...GatsbyImageSharpFixed
//               }
//             }
//           }
//         }
//       }
//     }
//   }
