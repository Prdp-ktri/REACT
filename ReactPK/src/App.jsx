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

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log(username)
    setUsername('')
  }

  const [username, setUsername] = useState('')

  return (
    <div>
      <h1>
        Hello {PK}, you are {age} years old. You reside in {place}.
      </h1>
      <button onClick={abc}>Change User</button>

      <h1>Value of a is {a}</h1>
      <button onClick={changeA}>Change A</button>

      <div>
        <h3>Number is {num}</h3>
        <button onClick={() => setNum(num + 35)}>Increment</button>
        <button onClick={() => setNum(num - 35)}>Decrement</button>
      </div>

      <div>
        <h2 className="text-5xl bg-green-700 text-black">Hello Guys</h2>
      </div>

      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input
          className="px-4 py-3 rounded text-xl m-5"
          type="text"
          placeholder="Enter your name:"
          onChange={(e)=>{
            setUsername(e.target.value)
          }}
          value={username}
        />

        <button className="px-4 text-white py-3 m-5 text-xl font-semibold bg-emerald-300 rounded">Submit</button>
      </form>
    </div>
  );
}

export default App