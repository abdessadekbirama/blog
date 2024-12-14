import Nav from "./components/Nav"
import NewsApp from "./components/NewsApp"
import { ThemeProvider } from "./components/themeContext"

function App(){
  return (
      <ThemeProvider>
        <Nav/>
        <NewsApp/>
      </ThemeProvider>
  )
}

export default App
