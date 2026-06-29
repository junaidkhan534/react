import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'


export let ThemeData = createContext()
const ThemeContext = (props) => {
    const [theme, setTheme] = useState('light')
  return (
    <div>
        <ThemeData.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeData.Provider>
    </div>
  )
}

export default ThemeContext