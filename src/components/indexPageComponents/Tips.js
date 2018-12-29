import React from 'react'

import { Tip } from '../../symbols/Tip'
import styled from 'styled-components'
import { fonts, breakpoints } from '../../utils/styles'

const Title = styled('h2')`
  margin-bottom: 32px;
  font-family: ${fonts.monospace};
  font-weight: 100;
  font-size: 1.0625rem;
`
const TipsWrapper = styled.div`
  text-align: center;
`
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div:not(:last-child) {
    margin-bottom: 32px;
  }
  @media screen and (min-width: ${breakpoints[650]}px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  @media screen and (min-width: ${breakpoints[768]}px) {
    align-items: baseline;
    justify-content: space-around;
    & > div:not(:last-child) {
      margin: 0;
    }
    & > div {
      width: 230px;
    }
  }
  @media screen and (min-width: ${breakpoints[992]}px) {
    justify-content: space-evenly;
    & > div {
      width: 270px;
    }
  }
`

export const Tips = () => (
  <TipsWrapper>
    <Title>Comment Ça Marche</Title>
    <InnerWrapper>
      <Tip
        tipNum="01"
        title="TROUVEZ LES ARTICLES"
        bodyText="Consultez les différentes catégories pour trouver un article pour vous, votre conjoint ou votre enfant."
      />
      <Tip
        tipNum="02"
        title="AJOUTEZ-LES AU PANIER"
        bodyText='En Cliquant sur le bouton "Ajouter Au Panier" disponible depuis la page de chaque article.'
      />
      <Tip
        tipNum="03"
        title="VALIDEZ VOTRE COMMANDE"
        bodyText="Validez votre commande en fournissant vos coordonnées personnelles"
      />
    </InnerWrapper>
  </TipsWrapper>
)
