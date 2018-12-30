import React from 'react'
import styled from 'styled-components'

import { CategoryHero } from '../../symbols/CategoryHero'
import { Articles } from '../categoryPageComps/Articles'
import { Dropdowns } from '../categoryPageComps/Dropdowns'
import { Menu } from '../indexPageComponents/Menu'

const FemmesWrapper = styled.div`
  & > div:nth-of-type(2) {
    margin-bottom: 28px;
  }
  & > div:nth-of-type(3) > div:first-child {
    margin-bottom: 40px;
  }
`
const MaxWidth = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`

export const Category = ({ category, hero, articles }) => {
  return (
    <FemmesWrapper>
      <Menu />
      <CategoryHero fluid={hero} category={category} />
      <MaxWidth>
        <Dropdowns category={category} />
        <Articles edges={articles} category={category} />
      </MaxWidth>
    </FemmesWrapper>
  )
}
