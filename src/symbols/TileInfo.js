import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { colors, fonts } from '../utils/styles'

const TileInfoWrapper = styled.div`
  width: 209px;
  height: 181px;
  margin: 0 20px;

  display: flex;
  position: relative;
  flex-direction: column;
  &::before {
    content: '';
    background: white;
    font-size: 1.8rem;
    text-align: center;
    border: 3px solid ${colors.whiteSmoke};
    width: 40px;
    height: 40px;
    border-radius: 25px;
    margin-left: calc(50% - 20px);
  }
  &::after {
    content: '\\2713';
    color: ${colors.oldLavender};
    position: absolute;
    top: 4px;
    margin-left: 45.7%;
    font-size: 2rem;
  }
`
const Body = styled.div`
  background: ${colors.whiteSmoke};
  height: calc(181px - 29px);
  position: absolute;
  top: 21px;
  z-index: -1;
  width: 209px;
  text-align: center;
`

const Title = styled('h6')`
  font-family: ${fonts.monospace};
  font-size: 1.0625rem;
  font-weight: 100;
  color: ${colors.oldLavender};
  padding-top: 44px;
  margin-bottom: 12px;
`

const Content = styled.p`
  font-family: ${fonts.dosis};
  color: ${colors.oldLavender};
`

export const TileInfo = ({ title, content }) => (
  <TileInfoWrapper title={title} content={content}>
    <Body>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Body>
  </TileInfoWrapper>
)

TileInfo.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
