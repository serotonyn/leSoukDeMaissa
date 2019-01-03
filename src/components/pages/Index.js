import React from 'react'

import styled from 'styled-components'

import { Menu } from '../indexPageComponents/Menu'
import { Collage } from '../indexPageComponents/Collage'
import { TileCategories } from '../indexPageComponents/TileCategories'
import { Tips } from '../indexPageComponents/Tips'
import { TileInfos } from '../indexPageComponents/TileInfos'
import { Footer } from '../indexPageComponents/Footer'

const IndexWrapper = styled.div`
  margin: 0 auto;
  & > div:nth-child(n + 3) {
    margin-bottom: 64px;
  }
`

export const Index = () => {
  return (
    <IndexWrapper>
      <Menu />
      <Collage />
      <TileCategories />
      <Tips />
      <TileInfos />
      <Footer />
    </IndexWrapper>
  )
}
