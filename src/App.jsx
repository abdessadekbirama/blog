import Nav from "./components/Nav"
import Hero from "./components/Hero"
import { ThemeProvider } from "./components/themeContext"

function App(){
  return (
      <ThemeProvider>
        <Nav/>
        <Hero/>
      </ThemeProvider>
  )
}

export default App
