import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { breakpoints } from '../../utils/styles'
import { ArticleWithPrice } from '../../symbols/ArticleWithPrice'
import { parseProduct } from '../../utils/parsing'
import ArticlesContext from '../../context/articlesContext'

const ArticlesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > div {
    margin: 3vw 10px;
  }

  @media screen and (min-width: ${breakpoints[992]}px) {
    justify-content: space-evenly;
  }
`

export const Articles = ({ edges, category }) => {
  return (
    <ArticlesContext.Consumer>
      {({ selectedBrands }) => {
        // const parsedArticles = edges.map(e => parseProduct(e.node))

        // let filtredEdges
        // if (selectedBrands.length === 0) {
        //   filtredEdges = parsedArticles
        // } else {
        //   filtredEdges = parsedArticles.filter(e =>
        //     selectedBrands.includes(e.brand)
        //   )
        // }
        // console.log(filtredEdges)

        return (
          <ArticlesWrapper>
            {edges.map(edge => {
              // const parsedArticle = parseProduct(edge.node)
              // const { title, price, brand } = parsedArticle
              return (
                <ArticleWithPrice
                  key={edge.id}
                  fluid={edge.fluid}
                  category={category}
                  id={edge.id}
                  title={edge.title}
                  price={edge.price}
                  brand={edge.brand}
                />
                // <div>hi</div>
              )
            })}
          </ArticlesWrapper>
        )
      }}
    </ArticlesContext.Consumer>
  )
}

Articles.propTypes = {
  edges: PropTypes.arrayOf(PropTypes.object),
  category: PropTypes.string.isRequired,
}

Articles.defaultProps = {
  edges: [
    {
      node: {
        id: '7f61ce41-59d2-5aa1-8846-d86ceedfc2dd',
        name: 'pull_gris',
        childImageSharp: {
          fluid: {
            base64:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAESklEQVQ4y5WUS3PbVBTHr2w2LPkEsIQFa4aBDTumX4A200Cn004HCkNDXnUcx078Svx+SoplWZZly5YlWbJs5+GkTuqmLZ1CSpkmGyAMMCxYMjC05KHL9U0dJ+2Ks7lHV+f+5n/OuecC8NzSAT8ocHnsC0yGSMaT1iuXr1oW02nLF1c+xvtUKgciPp/F7XBYuMUM3vO7XMAzMQrOWHreCxq6gX25VLKAF4xG0FmbjQi6p4j+Xsjvt4Q9c/g76HGDoH0MvGRKpYID+Gjg1Xg47LWNjTlyDPv6GXgs+rZ3xvF+/3ve5SSOlc4Mgtwjn4GqIOAfIpt9Uy5XfhSLJfjl9c8hnUw+o+IxLjA3e04siBsuu/2fmakpmAiFuclrl1/DMMc0cUYZT5NAkVVrzy8Lgn+9vQ5rNe3p+MjIv4GpUciH3T8Erw85cwEXvHHtKkTqD4ocByML80zvTCISsXrsNwfACs8Drz+Ma0enKKrVaEFDrx9wLHc4MToOHXbH+oWPzp/76sYIjARDJpfJ7PPZLIyFQps4K6lGxAILA6BaFsGkzYmBqXiKrak6bCAggppCnofzHu/BrMPxlEwmoVQSzSxFHRbzeehxubb6jGQ4PAAaqgrm5vwYmKEWmXSKgk2jcdgyGqZckcylRhM2dR1qsmxWUG1zGeaQY7JwevLmCTCdSAyAuqKAUCSJgVyWE2dn5sym0Xy2urwCEcDUFdWsVWUTNQuqUhUidYcCl4e28Ym7fQZSPwDWZQWwnGA5bkqpyaTJx4268cet9hoUC0WzqekQQaGC1KJSQJ7N/R4Lhdtup/Nhn5GKn1KIDgCGLWBgtSy1MiT9taHVf9vsbEBUQ7OJIHpNgyj9o55fKgg/Bb1ePhWJfNdnLKbJAXDJaACSZjFQluQ2mSSXNEXd627ehuhimwZSWNc0WC1Xjpp1A6LUd+PBQJVn2V32/h5xPE0vAslFDFQkeZVOU5uVkrjX3diEyDfrSF0f2PORwm/ROIqSWH4yGE/ydMoaCAbCz2tYXAv5fF2xIOzdRiknonETqcUpl0siBtIU/RDdBp8sVb8/aUriVFParRYYvnARA1maXrONTaxIovhzt9OBQf/8Ua8ZPSCq55GBrg+ZSj9Gij5RZfmkKYlo7JTCmgI+ePc9XItMKvnIZZvaqQiFXzvtNvQ4XUdozFB39f1clt3XVBVGQ+Fd1OUPdbXWPOlyNDoAaqJw4ufI1GgmEbM3lCr85v496HM5YYnLwW7nFhR4Hi4ZBkzFYr8EF4JvKZLk7Z3586+/wez09MvPV44mcdrb97pvyEU+0tJrfGzeP1nJs+/oipzNMUydzWSWGYqO9OIYinoFD4ZWOwtSS0Vw6eLw8WvNZq3gf9i9rTt43X60fWqWqyW83llfxWt3bYWoSWXrg7tblk+Hh4hKIW/ttFctSrVKrC8vEUKOJaYdLoAeChz/ZGcHXDo/hP3/ADXakjrZdp6RAAAAAElFTkSuQmCC',
            aspectRatio: 1,
            src: '/static/889f0ea1350afafa36f2da3597fe73c1/c138b/pull_gris.png',
            srcSet:
              '/static/889f0ea1350afafa36f2da3597fe73c1/7281e/pull_gris.png 200w,\n/static/889f0ea1350afafa36f2da3597fe73c1/c138b/pull_gris.png 305w',
            sizes: '(max-width: 305px) 100vw, 305px',
          },
        },
      },
    },
    {
      node: {
        id: 'a8534c4a-8b2c-5020-a36f-b34a7e58ed87',
        name: 'robe_noire',
        childImageSharp: {
          fluid: {
            base64:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADYUlEQVQ4y33TTYvrVBgH8DTqQri4U3wDmZk2adpJX5JJmve35j1pJmmm02nnLhxw59oP4FJF1IVeHRQuCFeuC1eCbkS5oNcvIbjyC7iyKX08OcMMV7mZAz3nKfnz63POaQjiieEFOV6TbNki/jd0K33uun5+Tyb8cI4zU78gynJFNI4oWeDg2eriTnq8ejDL119fP0vzcyZKl+9cfw/ikxZx2zguznEgL9avZfndP5NsDagDsJz0sWEl920v/yOIl+AG5UM/OrmDdxWWRJ6fPh0M4xKDUVy87gXzv8JkCaaTVaoRgmbGoFkJGHa2cfw56FYUXB1FTDpO3NylH5XP1qsb5IswPQPHK7YI3epWsjGsdGO5Ocha8KDO2OF5azIxm7HZ8YowpznuEnX3URCfou1mW9Oe7RC2082kMp1j0Iz4Xp2RtJB88+JtIo6Lp4NptiImaty6OvDT771wAQiqDDOtEVD1aKujGv3Az3WGE91WlJw0d3h+9y0ERs9gMFpcTv0SdCOuND3eIQxkNag0IwHbLfDNS3JA2n7ZDH5+75KQlACf4dQrPrSmOahauFG0YCdrIUxkv1K0CB1D/hkGlYB0g0Uz+PtvjwlenGLQsGcfqKibiextJMXfTZQAjiZuVa/mdP5xnRHkkPTjZTNYnqwJZqDiLaOb/EKUPeBFZyNIbo3BWHAqfuKBZhef1BleQlsOTptBRfOJA0YkcVi0vx0emTDkjGos2DuEActb1ejIAcnMP60zI8EjNfeWS+EEk3jhJQrX7Fj7sTdQoD9QqgFnwoC3oD82q8OxCaKeXdaZAe+Skj1vBtmhjOar17PHSr/QfRG6fXHbH+k1Bt2hUTFDHQQ9u19nmJFNKs4tt9xnpZsaQb92ujxQjLBlBhowQwNoVqvQB3h1hkF6aJOSVTSDvUPxpqZ6wqMDioN2l9/SrArdgb5r95UNdagCp6Q3oGhkzWCX4dH8Mq47NP/TXnsE+9T4n05frqhDrTpgpF0NjuX0q2vwSLsF7NAcml/BdZviHtVg3WWN0AMT9rvi3zSrw3CS3ICcMmsG29QYr3tvdMk2zT3cb7PZAc1/2enJ3yH03Q4j7CP4G1YI38fHwlrkWL4NxB0SxKt7LEHR3ItNufWyxP/V6OyC+OG9i/88+xfXzh05kc/r2QAAAABJRU5ErkJggg==',
            aspectRatio: 1,
            src:
              '/static/bd5c1268d9e2a74c4e61455b54fcfe84/c138b/robe_noire.png',
            srcSet:
              '/static/bd5c1268d9e2a74c4e61455b54fcfe84/7281e/robe_noire.png 200w,\n/static/bd5c1268d9e2a74c4e61455b54fcfe84/c138b/robe_noire.png 305w',
            sizes: '(max-width: 305px) 100vw, 305px',
          },
        },
      },
    },
    {
      node: {
        id: '6a24dcfc-dc69-58b9-a15d-a12eed710315',
        name: 'veste_noire',
        childImageSharp: {
          fluid: {
            base64:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADqUlEQVQ4y32UPY/jRBjHnYQKmj0Wbk9CJLE94/Hr2DPj9yTeF5ZDSEjH1XS30hUUHNJBQ4uETnfSNdACHQVC4gvwARAfgZL2GhoQJBs/PB4nm13lxEijGdszv3n+z/8ZG8a1RikzCKF6PpmY3fPQnE5HjLEhJXT49pgMqBMOLMsedmsODg4NIYTx4MHHxl5TMjVsm27BA8a8gfE/DQ8cEUL03DSt/QXzeaNHxtwrEG64P5mMP+2mR0dHCr99Tanzk2VZt3dr+iCUyvahjtPD/CB43bbJj2HIIQgiuHfvw2VZVuD5AbheAKZp/4myHx8cvKL34dp9mETJt269sQX/gpJByHSVZvnqk0eP4OLiYs3j5JI67sqyCOAIGN2XvWR79O7d928CMRodHefJFIF/YT5BpflaSNUWZd1Klerevce+tG2nA/663e+63g723bffG74faudQ4jECcRNps6xoE6FalZcQRgkkMgWMrkXT1l2UCP6dR9FrvSp200QEjjbjfdf1u42XaVa2AYKEzEFlJci0uAkk9AWW1Jt9ZTg7IAB0eRv1Lnsf+X7UbVyqtGg7CI8VFNViCwRc29oEJVP2N7HJWxu3d8DPHn9ujMfTUZ8L/6GHTmIUS84FguYQJwqas/dAZhUQzCFz/ZY6HubQWTvUmeoIybUIm+bEmJrWVvIXDjqM4BWPZVvOjiFC8OndD0CkCCQMyydqmRtglDjfuIGSh1fAvKgMlDLamPKkczLwww4IWd2gGRnUx+cQ4bPnc+wxAiMNtC1L6FrcXEfdMPkG2ZwQhvHTqWljQfNVV9hdtIkqNMwPEhxTcBHoIJBQFyaTSbq5fjtgVS8Q6OoXGNUz06JYJmIVhIku4BBNiUWmYWGcAfW4BjosgPHEnGugRa5Lnhmu19chGvC8Szg6u4y4bP2At1xmq1gWl1yUwEXRMozQ9fiauSFeQ3reXz+2A5bVwsDE6xdS5c8x6ehsCjxJuzpshcohr08glvW/sSzXbpCsXZ+vEYrFzc502VDvuuTGEKoY9fmsvgpRqlTFC44yY5Fj6VQ/l/N3fsvrcxDZArxQdHlcYscSikpdvx7fARezxihQdteKor6TJKlTlbNDhDYyLU91KmR5mFWn34is+cOP1D+xKCDgKTqe6F+N54v9/2eWVy/9mcb52dXps9niVZVVIR7wJIjUDxjh7R6Y7IAzjDDL696gvB5wLgd5Xg3wDg8xFcOmCoy0PBmI4nj0sgOZE17N/wNmmT3BbO2eKAAAAABJRU5ErkJggg==',
            aspectRatio: 1,
            src:
              '/static/33d6fec268a8779415ff15d595d1804d/c138b/veste_noire.png',
            srcSet:
              '/static/33d6fec268a8779415ff15d595d1804d/7281e/veste_noire.png 200w,\n/static/33d6fec268a8779415ff15d595d1804d/c138b/veste_noire.png 305w',
            sizes: '(max-width: 305px) 100vw, 305px',
          },
        },
      },
    },
    {
      node: {
        id: '6a24dcfc-dc69-58b9-a15d-a12eed710315',
        name: 'veste_noire',
        childImageSharp: {
          fluid: {
            base64:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADqUlEQVQ4y32UPY/jRBjHnYQKmj0Wbk9CJLE94/Hr2DPj9yTeF5ZDSEjH1XS30hUUHNJBQ4uETnfSNdACHQVC4gvwARAfgZL2GhoQJBs/PB4nm13lxEijGdszv3n+z/8ZG8a1RikzCKF6PpmY3fPQnE5HjLEhJXT49pgMqBMOLMsedmsODg4NIYTx4MHHxl5TMjVsm27BA8a8gfE/DQ8cEUL03DSt/QXzeaNHxtwrEG64P5mMP+2mR0dHCr99Tanzk2VZt3dr+iCUyvahjtPD/CB43bbJj2HIIQgiuHfvw2VZVuD5AbheAKZp/4myHx8cvKL34dp9mETJt269sQX/gpJByHSVZvnqk0eP4OLiYs3j5JI67sqyCOAIGN2XvWR79O7d928CMRodHefJFIF/YT5BpflaSNUWZd1Klerevce+tG2nA/663e+63g723bffG74faudQ4jECcRNps6xoE6FalZcQRgkkMgWMrkXT1l2UCP6dR9FrvSp200QEjjbjfdf1u42XaVa2AYKEzEFlJci0uAkk9AWW1Jt9ZTg7IAB0eRv1Lnsf+X7UbVyqtGg7CI8VFNViCwRc29oEJVP2N7HJWxu3d8DPHn9ujMfTUZ8L/6GHTmIUS84FguYQJwqas/dAZhUQzCFz/ZY6HubQWTvUmeoIybUIm+bEmJrWVvIXDjqM4BWPZVvOjiFC8OndD0CkCCQMyydqmRtglDjfuIGSh1fAvKgMlDLamPKkczLwww4IWd2gGRnUx+cQ4bPnc+wxAiMNtC1L6FrcXEfdMPkG2ZwQhvHTqWljQfNVV9hdtIkqNMwPEhxTcBHoIJBQFyaTSbq5fjtgVS8Q6OoXGNUz06JYJmIVhIku4BBNiUWmYWGcAfW4BjosgPHEnGugRa5Lnhmu19chGvC8Szg6u4y4bP2At1xmq1gWl1yUwEXRMozQ9fiauSFeQ3reXz+2A5bVwsDE6xdS5c8x6ehsCjxJuzpshcohr08glvW/sSzXbpCsXZ+vEYrFzc502VDvuuTGEKoY9fmsvgpRqlTFC44yY5Fj6VQ/l/N3fsvrcxDZArxQdHlcYscSikpdvx7fARezxihQdteKor6TJKlTlbNDhDYyLU91KmR5mFWn34is+cOP1D+xKCDgKTqe6F+N54v9/2eWVy/9mcb52dXps9niVZVVIR7wJIjUDxjh7R6Y7IAzjDDL696gvB5wLgd5Xg3wDg8xFcOmCoy0PBmI4nj0sgOZE17N/wNmmT3BbO2eKAAAAABJRU5ErkJggg==',
            aspectRatio: 1,
            src:
              '/static/33d6fec268a8779415ff15d595d1804d/c138b/veste_noire.png',
            srcSet:
              '/static/33d6fec268a8779415ff15d595d1804d/7281e/veste_noire.png 200w,\n/static/33d6fec268a8779415ff15d595d1804d/c138b/veste_noire.png 305w',
            sizes: '(max-width: 305px) 100vw, 305px',
          },
        },
      },
    },
  ],
  category: 'femmes',
}
