import React from 'react'

import styled from 'styled-components'

import { Menu } from '../indexPageComponents/Menu'
import { Collage } from '../indexPageComponents/Collage'
import { TileCategories } from '../indexPageComponents/TileCategories'
import { Tips } from '../indexPageComponents/Tips'
import { TileInfos } from '../indexPageComponents/TileInfos'

const IndexWrapper = styled.div`
  max-width: 1284px;
  margin: 0 auto;
  & > div + div {
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
    </IndexWrapper>
  )
}
