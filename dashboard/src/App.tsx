import React, { FC } from 'react'
import { css, Global, ThemeProvider } from '@emotion/react'
import MainLayout from './modules/dashboard/containers/MainLayout'
import theme from './ui/theme'

const globalStyles = css`
  body {
    color: ${theme.colors.grey.darker};
  }
`

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <MainLayout />
    </ThemeProvider>
  )
}

export default App
