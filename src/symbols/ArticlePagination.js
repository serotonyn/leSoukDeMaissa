import React from 'react'
import styled from 'styled-components'
import { fonts, breakpoints } from '../utils/styles'
import Arrow from '../assets/pagination_arrow.svg'

const ArticlePaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
  justify-content: space-between;
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: ${breakpoints[992]}px) {
    height: auto;
    left: 0;
    transform: translateX(0);
    bottom: 4%;
  }
`
const Text = styled.div`
  font-family: ${fonts.monospace};
  display: flex;
  align-items: flex-end;
  margin-top: 10px;

  @media screen and (min-width: ${breakpoints[650]}px) {
    align-self: flex-start;
    margin-left: 10%;
  }
  @media screen and (min-width: ${breakpoints[992]}px) {
    margin-left: 0;
    margin-top: 0px;
    align-self: center;
  }
`
const Current = styled.span`
  font-size: 1.125rem;
  line-height: 1.4;
`
const Slash = styled.span`
  margin: 0 5px;
`
const All = styled.span`
  font-size: 0.75rem;
`

const Arrows = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;

  @media screen and (min-width: ${breakpoints[992]}px) {
    width: 0;
    width: 35%;
    position: absolute;
  }
`
const LeftArrow = styled.div``
const RightArrow = styled.div`
  transform: rotate(180deg);
`

export const ArticlePagination = () => {
  return (
    <ArticlePaginationWrapper>
      <Text>
        <Current>02</Current>
        <Slash>/</Slash>
        <All>04</All>
      </Text>
      <Arrows>
        <LeftArrow>
          <img src={Arrow} />
        </LeftArrow>
        <RightArrow>
          <img src={Arrow} />
        </RightArrow>
      </Arrows>
    </ArticlePaginationWrapper>
  )
}
