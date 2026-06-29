import React from 'react'
import { useContext } from 'react'
import { ThemeData } from '../context/ThemeContext'

const Button = () => {
    let [theme, setTheme] = useContext(ThemeData)
    
  return (
    <div>
        <button
        onClick={()=>{
            setTheme('dark')
        }}
        >Change Theme:-{theme} </button>
    </div>
  )
}

export default Button