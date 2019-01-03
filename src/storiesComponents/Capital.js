import React from 'react'
import styled from 'styled-components'

import { text, breakpoints } from '../utils/styles'
import { ButtonCapital } from '../symbols/ButtonCapital'
import logoFull from '../assets/logo_full.svg'

const CapitalWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 308px;
  margin: 0 auto;
  @media screen and (min-width: ${breakpoints['992']}px) {
    width: 386px;
  }
  @media screen and (min-width: ${breakpoints['1284']}px) {
    width: 530px;
  }
`

const LogoFull = styled.img`
  margin-bottom: 20px;
`

const Slogan = styled('h2')`
  ${text.slogan}
  margin-bottom: 8px;
  font-size: 1.5rem;
`

const SousSlogan = styled('h3')`
  ${text.default}
  margin-bottom: 32px;
  width: 308px;
`

const ThreeButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 308px;
`

export const Capital = () => (
  <CapitalWrapper>
    <LogoFull src={logoFull} alt="bytesnim logo" width="86" />
    <Slogan>LE PRÊT-À-PORTER POUR TOUTE LA FAMILLE</Slogan>
    <SousSlogan>
      Trouvez votre style parmi des articles de marques sélectionnés sur le
      volet pour vous.
    </SousSlogan>
    <ThreeButtons>
      <a href="#">
        <ButtonCapital text="FEMMES" />
      </a>
      <a href="#">
        <ButtonCapital text="HOMMES" />
      </a>
      <a href="#">
        <ButtonCapital text="ENFANTS" />
      </a>
    </ThreeButtons>
  </CapitalWrapper>
)
