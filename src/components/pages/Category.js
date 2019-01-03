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
  const parsedArticles = articles.map(a => parseProduct(a.node))
  const brands = parsedArticles.map(a => a.brand)
  const brandsUniq = Array.from(new Set(brands))
  // console.log(brandsUniq)
  return (
    <Layout>
      <FemmesWrapper>
        <Menu />
        <CategoryHero fluid={hero} category={category} />
        <MaxWidth>
          <Dropdowns category={category} brands={brandsUniq} />
          <Articles edges={articles} category={category} />
        </MaxWidth>
        <Footer />
      </FemmesWrapper>
    </Layout>
  )
}
