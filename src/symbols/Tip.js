import React from 'react'
import { PropTypes } from 'prop-types'

import styled from 'styled-components'
import { text } from '../utils/styles'

const TipWrapper = styled.div`
  width: 250px;
  text-align: center;
`
const TipNumber = styled.p`
  ${text.slogan};
  font-size: 2rem;
  text-decoration: underline;
  text-underline-position: under;
  margin-bottom: 20px;
`

const Title = styled('h6')`
  ${text.slogan};
  font-size: 1.25rem;
  margin-bottom: 19px;
`

const BodyText = styled.p`
  ${text.slogan};
  font-size: 0.8125rem;
`

export const Tip = ({ tipNum, title, bodyText }) => (
  <TipWrapper>
    <TipNumber>{tipNum}</TipNumber>
    <Title>{title}</Title>
    <BodyText>{bodyText}</BodyText>
  </TipWrapper>
)

Tip.propTypes = {
  tipNum: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
}
