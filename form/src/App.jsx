import React, { useState } from 'react'

const App = () => {

  const [tittle, setTittle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("junaid", tittle);
    setTittle('')
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input 
        type="text"
        placeholder='Enter your Name'
        value={tittle}
        onChange={(e) => {
          setTittle(e.target.value)
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App