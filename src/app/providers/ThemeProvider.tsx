import { PropsWithChildren } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../shared/styles/GlobalStyle'
import { theme } from '../../shared/styles/theme'

export function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <SCThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </SCThemeProvider>
  )
}

