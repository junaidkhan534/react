import React from 'react'

const App = () => {
  const btnClicked = (elem) => {
    console.log("clciked");
    
  }
  return (
    <div>
      <h1>junaid</h1>
      <button onClick={(elem)=>{
        btnClicked(elem.target)
      }}>click me</button>
    </div>
  )
}

export default App