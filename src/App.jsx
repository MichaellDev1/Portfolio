import { Route, Router } from 'wouter'
import './app.css'
import Home from './components/Home'
import { ThemeContext } from './Context/Themes'
import Pdf from './components/Pdf'

function App () {
  return (
    <ThemeContext>
      <Router>
        <Route path='/' component={Home} />
        <Route path='/cv' component={Pdf} />
      </Router>
    </ThemeContext>
  )
}

export default App
