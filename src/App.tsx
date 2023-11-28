
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./Styles/theme"
import { GlobalStyled } from "./Styles/global"
import { Router } from "./routers/Router"
import { AuthProvider } from "./Context/AuthProvider"
import { ToastContainer } from "react-toastify"
import 'react-toastify/ReactToastify.css'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <AuthProvider>
          <Router />
        </AuthProvider>
        <GlobalStyled />
      </ThemeProvider>
      <ToastContainer />
    </>
  )
}
