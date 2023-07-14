import { Dashboard } from "./Screen/Dashboard"

import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./Styles/theme"
import { GlobalStyled } from "./Styles/global"
import { CreateUser } from "./Screen/CreateUser"

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CreateUser />
        <GlobalStyled />
      </ThemeProvider>
    </>
  )
}
