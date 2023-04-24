import React, { createContext, useState } from 'react'
import Themes from '../../components/ThemeData'
const Context = createContext()

export function ThemeContext ({ children }) {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <Context.Provider value={{ Themes: Themes[darkMode ? 'dark' : 'light'], darkMode, setDarkMode }}>
      {children}
    </Context.Provider>
  )
}

export default Context
