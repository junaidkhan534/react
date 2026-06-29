import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Button from './components/Button'
import { useContext } from 'react'
import { ThemeData } from './context/ThemeContext'

const App = () => {
  let [theme, setTheme] = useContext(ThemeData)
  
  
  return (
    <div className={theme}>
      <Navbar/>
      <Button/>
    </div>
  )
}

export default App