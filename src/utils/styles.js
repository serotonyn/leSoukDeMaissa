import { css } from 'styled-components'

export const colors = {
  fauxGray: '#C1B4C0',
  oldLavender: '#775775',
  darkLavender: '#715192',
  gainsboro: '#E0D6EB',
  whiteSmoke: '#F6F3F9',
  AntiFlashWhite: '#ECF0EF',
  grey: '#F5F5F5',
  mediumTurquise: '#50E3C2',
  platinium: '#E1ECE9',
  msuGreen: '1C453B',
}
export const spacing = {
  '3xs': 2,
  '2xs': 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
}

const defaultFontStack = [
  'dosis',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Open Sans',
  'Helvetica Neue',
  'sans-serif',
].join()

export const monospaceFontStack = [
  `Marcellus`,
  `Space Mono`,
  `SFMono-Regular`,
  `Menlo`,
  `Monaco`,
  `Consolas`,
  `Liberation Mono`,
  `Courier New`,
  `monospace`,
].join()

export const fonts = {
  dosis: defaultFontStack,
  monospace: monospaceFontStack,
}

// export const button = {

// }

export const text = {
  slogan: css`
    font-family: ${monospaceFontStack};
    letter-spacing: 1px;
  `,
  default: css`
    font-family: ${defaultFontStack};
    font-size: 1.16875rem;
  `,
}

export const breakpoints = {
  '650': 650,
  '768': 768,
  '992': 992,
  '1024': 1024,
  '1284': 1284,
}

export const button = {
  capital: css`
    font-family: ${fonts.dosis};
    font-size: 1rem;
    font-weight: 100;

    width: 100px;
    height: 40px;
    background-color: ${colors.oldLavender};
    color: #fff;

    border-radius: 3px;

    cursor: pointer;

    &::after {
      content: '\\2192';
      margin-left: ${spacing.xs}px;
    }
  `,
  default: css`
    background-color: ${colors.gainsboro};
    border: 1px solid ${colors.gainsboro};
    box-sizing: border-box;
    color: ${colors.gainsboro};
    cursor: pointer;
    display: block;
    font-family: ${fonts.dosis};
    margin: 0;
    min-height: 2.25rem;
    padding: ${spacing.xs}px ${spacing.sm}px;
    text-align: center;
    text-decoration: none;
    transition: 200ms background linear, 100ms border-color linear;

    :focus,
    :hover {
      background: ${colors.gainsboro}0c;
    }

    &[disabled] {
      background-color: ${colors.gainsboro};
      cursor: not-allowed;
    }
  `,
  small: css`
    font-size: 0.875rem;
  `,
  big: css`
    font-family: ${fonts.monospace};
    font-size: 1.25rem;
    padding: 0.25em 0.625em;
  `,
  purple: css`
    background-color: ${colors.gainsboro};
    border-color: ${colors.gainsboro};
    color: ${colors.gainsboro};
    cursor: pointer;
    display: block;
    margin-top: 0.75rem;
    width: 100%;

    :focus,
    :hover {
      background-color: ${colors.gainsboro};
    }

    &[disabled] {
      background-color: ${colors.gainsboro};
    }
  `,
  ghost: css`
    border: 1px solid transparent;

    :focus,
    :hover {
      background: ${colors.gainsboro};
      border-color: ${colors.gainsboro};
    }
  `,
}
