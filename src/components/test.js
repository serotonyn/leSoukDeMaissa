import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const fluid = {
  base64:
    'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAWABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEEBQP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB25qU42UCvIdQf//EABkQAQADAQEAAAAAAAAAAAAAAAIAARASA//aAAgBAQABBQLfV8kdW4hShFHP/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGRAAAgMBAAAAAAAAAAAAAAAAARAAAhIh/9oACAEBAAY/AmZU6fF//8QAGxABAAICAwAAAAAAAAAAAAAAAQAREGEhMVH/2gAIAQEAAT8hgjjjHZKrWy8EbjagF8lz/9oADAMBAAIAAwAAABB/4IL/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAVEQEBAAAAAAAAAAAAAAAAAAAgIf/aAAgBAgEBPxCj/8QAHBABAQACAwEBAAAAAAAAAAAAAREAIRAxQVFx/9oACAEBAAE/EDXeMQbOEjum78cMzZA8HQfb9wdGImRwud40QaPw84f/2Q==',
  aspectRatio: 0.9033816425120773,
  src: '/static/5cd4192f3b0ddb1296ec7d274120dca2/53b4a/Women.jpg',
  srcSet:
    '/static/5cd4192f3b0ddb1296ec7d274120dca2/bf99b/Women.jpg 75w,\n/static/5cd4192f3b0ddb1296ec7d274120dca2/9d7df/Women.jpg 150w,\n/static/5cd4192f3b0ddb1296ec7d274120dca2/53b4a/Women.jpg 300w,\n/static/5cd4192f3b0ddb1296ec7d274120dca2/91bac/Women.jpg 374w',
  sizes: '(max-width: 300px) 100vw, 300px',
}

export default function test() {
  return (
    <StaticQuery
      query={graphql`
        {
          images: allFile(
            filter: { relativePath: { glob: "collage-images/*" } }
          ) {
            totalCount
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
      `}
      render={data => (
        <>
          {console.log('fluid', JSON.stringify(data.images.edges, null, 2))}
          {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} /> */}
          {/* <Img fluid={fluid} /> */}
        </>
      )}
    />
  )
}
