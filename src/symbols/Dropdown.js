import React from 'react'
// import styled from 'styled-components'
import PropTypes from 'prop-types'
import Select from 'antd/lib/select'
import 'antd/lib/select/style/css'

import { fonts } from '../utils/styles'

// const SelectSty = styled(Select)`
//   // width: 342px;
//   width: 100%;
//   height: 43px;
//   background: ${props =>
//     props.category === 'hommes' ? colors.AntiFlashWhite : colors.whiteSmoke};
//   font-family: ${fonts.dosis};
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 20px;

//   & > div:nth-of-type(2) {
//     transform: rotate(-90deg);
//   }
// `

const Option = Select.Option

// const children = []
// for (let i = 10; i < 36; i++) {
//   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
// }

export class Dropdown extends React.Component {
  handleChange = value => {
    // console.log(`selected ${value}`)
    this.props.filterBrands(value)
  }
  render() {
    const { brands } = this.props
    const children = brands.map((b, i) => <Option key={b}>{b}</Option>)
    return (
      // <DropdownWrapper category={category}>
      <Select
        mode="multiple"
        style={{
          width: '342px',
          height: '43px',
          fontFamily: `${fonts.dosis}`,
        }}
        placeholder="Marques"
        // defaultValue={['a10', 'c12']}
        onChange={this.handleChange}
      >
        {children}
      </Select>
      // </DropdownWrapper>
    )
  }
}
// ,{/* <div>{text}</div>
// <div>&lt;</div> */}

Dropdown.propTypes = {
  text: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}
Dropdown.defaultProps = {
  text: 'Marques',
  category: 'femmes',
}
