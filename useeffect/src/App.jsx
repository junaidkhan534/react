import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


const App = () => {


  const [a, setA] = useState(0)

  useEffect(function(){
    console.log("effect is running");

  },[a])

  function api(){
    setA(a+5)
  }
    
    
  

  return (
    <div>
      <h1>{a}</h1>
      <button onClick={api}>click</button>
    </div>
  )
}

export default App
