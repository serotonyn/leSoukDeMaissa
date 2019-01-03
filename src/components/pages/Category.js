import React from 'react'
import styled from 'styled-components'

import { CategoryHero } from '../../symbols/CategoryHero'
import { Articles } from '../categoryPageComps/Articles'
import { Dropdowns } from '../categoryPageComps/Dropdowns'
import { Menu } from '../indexPageComponents/Menu'
import Layout from '../layout'
import { Footer } from '../indexPageComponents/Footer'
import { parseProduct } from '../../utils/parsing'

const FemmesWrapper = styled.div`
  & > div:nth-of-type(2) {
    margin-bottom: 28px;
  }
  & > div:nth-of-type(3) > div:first-child {
    margin-bottom: 40px;
  }
  & > div:last-child {
    margin-bottom: 64px;
  }
`
const MaxWidth = styled.div`
  max-width: 1284px;
  margin: 0 auto;
`

export const Category = ({ category, hero, articles }) => {
  // const parsedArticles = articles.map(a => parseProduct(a.node))
  // console.log(JSON.stringify(articles, null, 2))
  // const brands = parsedArticles.map(a => a.brand)
  // const brandsUniq = Array.from(new Set(brands))
  // console.log(brandsUniq)

  return (
    <Layout>
      <FemmesWrapper>
        <Menu />
        <CategoryHero fluid={hero} category={category} />
        <MaxWidth>
          {/* <Dropdowns category={category} brands={brandsUniq} /> */}
          <Articles edges={articles} category={category} />
        </MaxWidth>
        <Footer />
      </FemmesWrapper>
    </Layout>
  )
}

Category.defaultProps = {
  edges: [
    {
      node: {
        id: '5c6fd631-22f1-5d88-9ecc-6aee15499de7',
        title: '128__Pull_motif_rouge',
        content: '<p>L</p>\n<p>Rouge</p>\n<p>4200</p>\n<p>Jaqueline Riu</p>\n',
        featured_media: {
          localFile: {
            childImageSharp: {
              fluid: {
                base64:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAErElEQVQ4y3WUe0ybVRTAvwJOjdFMls2ICxvyfoi0jEd5FWiBNi0IrJW2FCgrpfRF7Ur5KC1Qnm15P8b7MZnIQobOTUBZ4qYxykw0i/8Y9seMOhMTTIyPqAlt77Hf5aEmcPIl59z7nfO759ycewjCJwv2FkoR8OsOIePx/Ij/CJ+THbB+Yylgsq/bXyx8LeCvxw9oB/+ypGLa3zs72N66v7W3WZjLxvrRF58eQowdnWnsAm45cYxIyiS89kaL4GD9+R+/YX2/Tk8QqU8+Q/y0sUqt8cmGanljHSsH1BnZwGWztwQFue1rK1d1V0dcuupykVUoLNkwN5hhYngUtPr6XipGGpNA+wqAyM/n7p3g0uv9KT1qay5dnZ6CUY0OnE02t8NuAVVlKayvXoNu62XQqeXgMKhgqPiid6HHCZubm/BwfIqBS357ee+q2FExBPjolAhz2HfvbHwIMxNTu9Nt7WhaUevhMVJ2H377ndtus3uy6cm7cq7AbZXI0EiDeXfb1gYfGBvmqNjtoot+KqmMIApCQjGsKvj8CU5wyJd1YinM9w+5u1hsKL+QglqFZWiysws5VRo0aLUheQYL9dta4E2dYfemvQNIrf57X/jTFCOPmbFXcvP5UJzuwnOBkRZ60u91Ehm4GkkvKa0AIz0J2aLjQREeDZ30ZFTvswfoyZ4bZhIaa+vcmZmsIiqWtDT7BRIBBJF+9hyGpp46g++R90IQOzMkDNUmpwH5aiJaLCuHd0wkzIllsOkagDmDyTtDWqGLXbATS2ekUjHL4xOHrUQUh0UQFS9H4HtsiGdgqDw8qosqeZbN9cyq9WhpdgEmBodhbek6clrt3pm+IeiQVBRTvoMqzRMHrLR4+p4xHB6N9VirHQPnnX2V475s2ioVnj6RFM0XiWBxbAJGtG+grsQ0z9rqTfj58Y85lO9n9z7xp5JJYlwguplZ/zYr98WzRKdEhoEdJUJdu94Ii1MznmZzEzKyOKCtrgGdSAyV9GR3aYkQbJJykvJVGYz+9v2E/ieR4RFEa3Q8BjpDo6qVqZmgMRg90lcSkCroHAjOBMGl4FA0EBbjNp1+Ceaz2MuUr/Lkab8NoeToJ6VKZmIgycoVFYRFQtKzJ709cQy0zOHDQHY+zHEL0bix0TOgUENva9td/LIyOTRHX+/RwP50Fm6fsTwe2x6bANaoOGTX6JG6gQS1wQgVihognS5PlbkJBmfnHuyH0e7dun00sLpKjoFKpZJZIZVBsUiMFHo9MlqsMDw5Dc2OXnTnvfc9b03NwkfO/m8O4j5Wqo+ZIty90SVKS8+p02iBXyb2OnucaLnbAWuXamHFYEK3uYXuW/wSuF6r2daaSNwyV0rKjgbWKmrwHVZVyuu7rFboMTWAk8v3tjFS3B2+N+xKY3mHfeX2+TrgcmX1n9NJ6UGU/1BOPu1IoLmkFGdoEb0uUHPyHpli4n6x8QvBUqOCwWYrGH1tUy8o/kGbmvF1f2bu3Hps4inK/11mNu242Um02NvwzxO+LyI0LEQpKOQYefz2FYejXscVsMinng/0zabDqT4WFXcsixheuoZ1q8t5/In7kpPC9BsLj8H2SBLzcP8fBc/1wJgw8rwAAAAASUVORK5CYII=',
                aspectRatio: 1,
                src:
                  '/static/9a67bf495f63ec92849fb4c8d8b5f87d/7937a/pull_moza.png',
                srcSet:
                  '/static/9a67bf495f63ec92849fb4c8d8b5f87d/ea2c8/pull_moza.png 200w,\n/static/9a67bf495f63ec92849fb4c8d8b5f87d/8bac0/pull_moza.png 400w,\n/static/9a67bf495f63ec92849fb4c8d8b5f87d/7937a/pull_moza.png 405w',
                sizes: '(max-width: 405px) 100vw, 405px',
              },
            },
          },
        },
      },
    },
    {
      node: {
        id: '1c281970-06b3-5f96-aeca-6dc96d848641',
        title: '126__Pull_vert',
        content: '<p>S</p>\n<p>Rouge</p>\n<p>4500</p>\n<p>Jaqueline Riu</p>\n',
        featured_media: {
          localFile: {
            childImageSharp: {
              fluid: {
                base64:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEDUlEQVQ4y42UTWwbRRTH17vjWX/t2mmSNiEhoS39VAEJhHqhJUk/Qu3Gjh07ie1drz/itY3ttdef8UcSKaRqGyHKBSk3DqRSDwj12BOqxKEXJLhUqBIIIYSQOEHVShDHO+yOA0LyVuJJozd6+38/vTfzdgjiwE5UN4lXsi28P5pvk//E35IaINBYM6S3Ng0XcjI5zmWpUa5g0L4d4fLEq0KJ0LfyR9hN5tpYfDLbshDvRuEL1AQbzGGdVZCIF9oxaQ1Xdra08eZopvnj8XT960vldijSar/R3l4bc9ebFybDmQ8n+cLrmm4s0qtU1yZqWwQdzGPgkVz7vqO4hc4U2uhibQP51290ha3tP8+vZNBYoowOhfM/nEuU2B60qA8dqd3AXn78Hclm24+Y3AaiY9U9yMv7DqGEDgsyogKpLgxLXUso9+xwTD6j6YdiJXL3wZf9wOED4LnPvjCzqdUnlnQbWZKNrjleU2ihrBgjJc13YUhCJr/YGRCKb2t6hyCTxHJBB7h6C5d+4tPPWVas/2ISm8iUbHZNK03FFF9FplgdQaGiGJdz+yZvAjk4aRZfDlegdFseavSAR3fuDjKp1d/hSgPRYluhky1EJ5qIjjcQjNYUEJT2aHcMsbwc1vRwOU9d3PxYB1i/iYGTn+wOs8nacxirIZhsqUAVqgJhtI6M0boKLHSMTg7ZuGJF01OBDDUitnRaLn2AgeM3d0bsicqvkJO7UAOttBSoVmeM1BDgKwoI5DpGdxxZw8Vbmt7gS5FDQrUfOJpf77Xc3J5g45UnxpC0B7Sq4g3FKNQR4MoIhEsK8KY6wJdC5qB0DwOvR0mSk3UqjJcxcDRVm7DxxccwXPwDcDICQlVRK0Nqqwq1lEeUO7EP5leQaUn6FieePE+MhXWAzHIaA5nF5EtMKPeN2vLPYFlSq5K7IFhEYDGnUP6MogK78MoSon2Zn8bLd/BwD/LV/uG2+hI4aJmPjtoC4lcwmP8eBDIIBN7vqksBvrRCeVP7YC6OzFO+R7Qn+dtgcv04nsWgzt9iuc7jIO0WXmbm+Pu0L/nQuJBGRq/4F/CKHeBOIOBJIuiKPrNO+xtwLv6UEeqvaTm2QJbsb9kZwkCbK3xK3e+a56I7tHpmtFdUVwrRruhz6BSemt7jHzBOfpb2ppFDqJ/GuUtSP5C94u+d4eWF08zVxduMT/SandxDi0u4rS6vbZY7a58JjA284zGzXvGYxZ+9M8SVh7WcgZDc37JjZh4H7dOeU47LC2Xif9ohrqL/wTHtwd4+5YHsjI/tnWechOqcma7xlPUaT9ouLRpsV8OExRUl6PkUORCpHjy2RX0oM+X5d2+emu9dlktQ56z3mtgXMtgPqJ4J5Ikhrvf8D/5nDv8G/QZWxczOZzYAAAAASUVORK5CYII=',
                aspectRatio: 1,
                src:
                  '/static/b4fc8bef7c7bd7ec8aca9460b7dd022c/7937a/pull_vert.png',
                srcSet:
                  '/static/b4fc8bef7c7bd7ec8aca9460b7dd022c/ea2c8/pull_vert.png 200w,\n/static/b4fc8bef7c7bd7ec8aca9460b7dd022c/8bac0/pull_vert.png 400w,\n/static/b4fc8bef7c7bd7ec8aca9460b7dd022c/7937a/pull_vert.png 405w',
                sizes: '(max-width: 405px) 100vw, 405px',
              },
            },
          },
        },
      },
    },
    {
      node: {
        id: 'c80c112a-50b5-52bc-9ba6-380b4c3a32eb',
        title: '117__veste_noire',
        content: '<p>M</p>\n<p>Noire</p>\n<p>3999</p>\n<p>Zara</p>\n',
        featured_media: {
          localFile: {
            childImageSharp: {
              fluid: {
                base64:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADr0lEQVQ4y22UPY8cNRjHZ28iaE5AcRFBKJfdefHM2B577Hmfvd3NnpaXKERKkZB8AKJEaRA6Ik5EUQoQBQ0NJSXfgjJIiJKGgo6GjgaaVXbP5rH39vaWiyXL3h375+f5Py+OA+PGB3fN4khROwjFdu/7YY8Q1jN7hKJLg4F3yTkdnue7QRDab4OB7xBCnQtj2E3P9mGIdpxXDCn4LkJhuP7t+4E9t7/fd6Io3hxcW2hGECD7cr/vvQWHvve84MXu7htP9vbe/gZF8S9RlPwLFn5GSfzaytrAns/z+iIQ3LUvwqUGXP6LcaHzPNdfPj3Wjx490CljGkWJhkc1gH4Ht/Pz0K2B8UYHAP4KcACI+eF0tDz+4tPF82dPXh4eXl8OvOAEAPMwjAAc/mzOX7nyTu+ChQC0r3AuLoMV/4CFWspCZVmuKJMqjLBKuVAAUvDNQDWsf3LG3zT3kgRvW0lounMKTM0lc0EA0ExZVFrkMGGF/w30BKJr9n8DqL/yKu79z2VigZACE3DZXhSyVJksNE0zXdadnRAsDXLYB/0gnCOE0ldmRpKsgLDeNEBjBU25arqRBbbDCQCH5iEL9APQMEQKdCxW2RFeALqn6z0TSYCeYJyq9mBigQeTma66idFNxzFRIUpOQggcpNBonZP3731yDoipBWKSPjZpARIsAaTa0VQTyvVkdlMXzQFYHusEM4ViukQIa6ig2bp6tjUkqS0tcPPICE5IuqCUK1G2molSl83IpJHGNNMJ4SqK6QJFGDTt31iVoOeOx7fOR5lbIOPyyAiPCVsQylQI1hIAMZ6DpUKnvNQx5iqM00UUE2OhpVy7NnC//urbDZAxaYFClJ97PgLdxAKmihMKQKmyvFZpVuo0qxRKwOXEAKmGs7bMru4P3I9u3d4AIUUssCibYxAc3JNzsGoJli8pl4ssb5ZctoqJRkc4g4fYArSEoKD7q9oP3bqoNsCiaCywqodPKbgoZKUzmCwrdA4J3Y5nmudDmN0iIWIJwJeYZJBC+I7V0I/dOx9uOpZTVp2NUt0cfAziv5Cy+pGL6jeYf9RN/bAZzY6K5jpEeqqp0ZFkS0yljhL+vm0sMXN/eP5gu0GgbHShaUwn09fX+7o7LGU1+Y7y4icIzjzNag2gsfkWJ9l22jDZrJpoNXIuvzvoZaKEzF+VZ1nXbjd+b6sSRNEJAN+OErZngZg7zx5u+qrTNt3Z2lYreNe0IEXrsJQ6w/HUKdvpjqgmbt+LthqBj8jZ/j/0iD3oSbFDQAAAAABJRU5ErkJggg==',
                aspectRatio: 1,
                src:
                  '/static/f77a12f303d771a3daad9ff05b1a07ea/7937a/veste_noire.png',
                srcSet:
                  '/static/f77a12f303d771a3daad9ff05b1a07ea/ea2c8/veste_noire.png 200w,\n/static/f77a12f303d771a3daad9ff05b1a07ea/8bac0/veste_noire.png 400w,\n/static/f77a12f303d771a3daad9ff05b1a07ea/7937a/veste_noire.png 405w',
                sizes: '(max-width: 405px) 100vw, 405px',
              },
            },
          },
        },
      },
    },
  ],
}
