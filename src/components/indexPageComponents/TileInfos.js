import React from 'react'

import styled from 'styled-components'

import { TileInfo } from '../../symbols/TileInfo'
import { breakpoints } from '../../utils/styles'

const TileInfosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  & > div:not(:last-child) {
    // margin-bottom: 32px;
  }

  @media screen and (min-width: ${breakpoints[650]}px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    & > div:not(:last-child) {
      margin-bottom: 0;
    }
    & > div:nth-child(-n + 2) {
      // margin-bottom: 20px;
    }
  }

  @media screen and (min-width: ${breakpoints[768]}px) {
    & > div {
      margin: 0 30px;
    }
    & > div:nth-child(-n + 2) {
      // margin-bottom: 30px;
    }
  }

  @media screen and (min-width: ${breakpoints[992]}px) {
    width: 700px;
  }
  @media screen and (min-width: ${breakpoints[1024]}px) {
    width: 100%;
    & > div {
      margin: 0 20px;
    }
    & > div:nth-child(-n + 2) {
      margin-bottom: 0px;
    }
  }
`
export const TileInfos = () => {
  return (
    <TileInfosWrapper>
      <TileInfo title="SERVICE CLIENT" content="0555 76 73 19" />
      <TileInfo
        title="LIVRAISON À DOMICILE"
        content="Actuellement sur Alger seulement."
      />
      <TileInfo title="PAIMENT SÉCURISÉ" content="À la livraison." />
      <TileInfo title="RETOURS & ÉCHANGES" content="Sous 3 jours*" />
    </TileInfosWrapper>
  )
}
