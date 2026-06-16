import React from 'react'

const App = () => {
  const btnClicked = (elem) => {
    console.log(elem);
    
  }
  return (
    <div>
      <h1>junaid</h1>
      <button onClick={(elem)=>{
        btnClicked(elem.clientX)
      }}>click me</button>
    </div>
  )
}

export default App