import React from 'react'

const App = () => {

 const user = {
  name: "junaid khan",
  age: 20,
  city: "bareily"
 }
 
 localStorage.setItem("user", JSON.stringify(user))

  const users = JSON.parse(localStorage.getItem("user"))
  console.log(typeof(users));
  
  return (
    <div>
      {/* {user.name} */}
    </div>
  )
}

export default App
