import React, {useState} from "react"
import './style.css'

const App = () => {

  const [num, setNum] = useState(0)

  let PK = "Pradeep Khatri"
  const age = 27
  const place = "Pushkar"

  const [a, setA] = useState(10)

  const abc = () => {
    console.log(PK)
    PK = "Aryan"
    console.log(PK)
  }

  const changeA = ()=>{
    console.log("chal gya")
    setA(25)
  }

  return <div>
    <h1>Hello {PK}, you are {age} years old. You reside in {place}.</h1>
    <button onClick={abc}>Change User</button>

    <h1>Value of a is {a}</h1>
    <button onClick={changeA}>Change A</button>

    <div>
      <h3>Number is {num}</h3>
      <button onClick={()=>setNum(num+35)}>Increment</button>
      <button onClick={()=>setNum(num-35)}>Decrement</button>
    </div>

    <div>
      <h2 className="text-5xl">Hello Guys</h2>
      <h2>Hello</h2>
    </div>
  </div>
}

export default App