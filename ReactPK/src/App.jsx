import React, {useEffect, useState} from "react"
import './style.css'
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Navbar2 from "./components/Navbar2"
import Card from "./components/Card"
import Ex from "./components/Ex"
import axios from 'axios'
import {Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Product from './pages/Product'
import Header2 from "./components/Header2"

const App = () => {

  const [data, setData] = useState([])

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

  const user = "Samarth"

  const users = [
    {
      name: "Alice Johnson",
      city: "New York",
      age: 28,
      profession: "Software Engineer",
      profilePhoto: "https://example.com/photos/alice.jpg",
    },
    {
      name: "Michael Smith",
      city: "Los Angeles",
      age: 34,
      profession: "Graphic Designer",
      profilePhoto: "https://example.com/photos/michael.jpg",
    },
    {
      name: "Sophia Lee",
      city: "Chicago",
      age: 25,
      profession: "Marketing Specialist",
      profilePhoto: "https://example.com/photos/sophia.jpg",
    },
    {
      name: "Daniel Kim",
      city: "Seattle",
      age: 31,
      profession: "Data Scientist",
      profilePhoto: "https://example.com/photos/daniel.jpg",
    },
    {
      name: "Emma Davis",
      city: "Austin",
      age: 29,
      profession: "Product Manager",
      profilePhoto: "https://example.com/photos/emma.jpg",
    },
  ];

  const getData = async  ()=>{
    const response = await axios.get("https://picsum.photos/v2/list");
    
    setData(response.data)
  }

  useEffect(() => {
    getData()
  }, [])
  



  return (
    <div>
      <Header />
      <Navbar />
      <Navbar2 />
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

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          className="px-4 py-3 rounded text-xl m-5"
          type="text"
          placeholder="Enter your name:"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />

        <button className="px-4 text-white py-3 m-5 text-xl font-semibold bg-emerald-300 rounded">
          Submit
        </button>
      </form>

      <>
        <nav className="bg-emerald-900 flex py-5 px-10 items-center justify-between">
          <h2 className="text-2xl">Monkey</h2>
          <div className="flex gap-8 items-center">
            <h4 className="text-xl">About</h4>
            <h4 className="text-xl">Contact</h4>
            <h4 className="text-xl">Services</h4>
            <h4 className="text-xl">Your Account</h4>
          </div>
        </nav>
      </>
      <div className="p-10">
        {users.map(function(elem,idx){
          return <Card key={idx} username={elem.name} age={elem.age} city={elem.city} photu={elem.profilePhoto} profession={elem.profession} />
        })}
      </div>
      <Ex name="Sarthak" />
      <div className="p-10">
        <div className="p-5 mt-5 bg-gray-950">
          {data.map(function(elem, idx){
            return <div key={idx} className="bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3">
              <img className="h-40" src={elem.download_url} alt="" />
              <h1>{elem.author}</h1>
            </div>
          })}
        </div>
      </div>

      <div>
        <Header2 />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App