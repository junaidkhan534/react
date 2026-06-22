import React, { useState } from 'react'

const App = () => {

  const [Num, setNum] = useState({user:"junaid", age:22})

  const chnage = () => {
    // const newNum = {...Num}
    // newNum.user = "khan"
    // newNum.age = 20
    // setNum(newNum)

    setNum(prev=>({...prev,user:"bhaibhia"}))
  }

  return (
    <div>
      <h1>{Num.user}, {Num.age}</h1>
      <button onClick={chnage}>chnage</button>
    </div>
  )
}

export default App




// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)

//   const increaseBtn = () => {
//     setNum(prev=>(prev+1))
//     setNum(prev=>(prev+1))
//     setNum(prev=>(prev+1))
//   }

//   const decreaseBtn = () => {
//     setNum(num-1)
//   }

//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={increaseBtn}>Increase</button>
//       <button onClick={decreaseBtn}>Decrease</button>
//     </div>
//   )
// }

// export default App
