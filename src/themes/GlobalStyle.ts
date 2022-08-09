import { createGlobalStyle } from 'styled-components'
import { Theme } from './themes'

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
body {
    background: ${({ theme }) => theme.pageBackground};
    overflow-x: hidden;
  }
  `
