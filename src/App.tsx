
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./Styles/theme"
import { GlobalStyled } from "./Styles/global"
import { Router } from "./Components/Router"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyled />
    </ThemeProvider>
  )
}
