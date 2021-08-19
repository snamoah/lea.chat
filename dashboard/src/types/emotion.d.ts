import '@emotion/react'

interface ThemeVariants {
  default: string
  light: string
  lighter?: string
  dark: string
  darker: string
}

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      blue: ThemeVariants
      red: ThemeVariants
      yellow: ThemeVariants
      green: ThemeVariants
      grey: ThemeVariants
      black: string
      white: string
    }
  }
}
