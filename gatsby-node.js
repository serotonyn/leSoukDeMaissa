/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// exports.onCreateNode = ({ node }) => {
//   console.log(node.internal.type)
// }
const graphql = require('gatsby')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/article.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allWordpressPost {
              edges {
                node {
                  id
                  slug
                  wordpress_id
                  categories {
                    name
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        console.log(JSON.stringify(result, null, 4))

        // Create blog post pages.
        result.data.allWordpressPost.edges.forEach(edge => {
          createPage({
            path: `${edge.node.categories[0].name}/${edge.node.id}`, // required
            component: blogPostTemplate,
            context: {
              // Add optional context data. Data can be used as
              // arguments to the page GraphQL query.
              //
              // The page "path" is always available as a GraphQL
              // argument.
              id: `${edge.node.id}`,
              seekWpMediaByTitleNum: `${edge.node.wordpress_id}__*`,
            },
          })
        })

        return
      })
    )
  })
}
