import React from "react"

const App = () => {

  const PK = "Pradeep Khatri"
  const age = 27
  const place = "Pushkar"

  const abc = () => {
    console.log("Welcome");
  }

  return <div>
    <h1>Hello {PK}, you are {age} years old. You reside in {place}.</h1>
    <button onClick={abc}>Change User</button>
  </div>
}

export default App