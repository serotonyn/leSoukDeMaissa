import { css } from 'styled-components'

export const colors = {
  fauxGray: '#C1B4C0',
  oldLavender: '#775775',
  darkLavender: '#715192',
  gainsboro: '#E0D6EB',
  whiteSmoke: '#F6F3F9',
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

    &::after {
      content: '\\2192';
      margin-left: ${spacing.xs}px;
    }
  `,
}

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
