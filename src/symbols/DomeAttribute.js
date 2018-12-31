import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fonts, colors } from '../utils/styles'

const DomeAttributeWrapper = styled.div`
  width: 58px;
  height: 76px;
  font-family: ${fonts.dosis};
  position: relative;
  top: 25px;
`
const ContentToPushDown = styled.div`
  &::before {
    content: ' ';
    background: ${colors.fauxGray};
    width: 34px;
    height: 15px;
    position: absolute;
    top: -25px;
    left: 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-left: 12px;
  }
`

const Title = styled.div`
  text-align: center;
  margin-bottom: 4px;
`
const Value = styled.div`
  text-align: center;
  color: ${colors.darkLavender};
`

export const DomeAttribute = ({ title, value }) => {
  return (
    <DomeAttributeWrapper>
      <ContentToPushDown>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </ContentToPushDown>
    </DomeAttributeWrapper>
  )
}

DomeAttribute.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

DomeAttribute.defaultProps = {
  title: 'Taille',
  value: 'M',
}
