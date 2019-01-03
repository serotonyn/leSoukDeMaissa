import React from 'react'
import styled from 'styled-components'

const Boxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
`
const Box = styled.div`
  width: 200px;
  height: 200px;
  background: pink;
  margin: 0 20px;
`

const Test = () => {
  return (
    <Boxes>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
      <Box>5</Box>
      <Box>6</Box>
      <Box>7</Box>
      <Box>8</Box>
      <Box>9</Box>
    </Boxes>
  )
}

export default Test
