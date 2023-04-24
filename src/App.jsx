import './app.css'
import Home from './components/Home'
import { ThemeContext } from './Context/Themes'

function App () {
  return (
    <ThemeContext>
      <Home />
    </ThemeContext>
  )
}

export default App
