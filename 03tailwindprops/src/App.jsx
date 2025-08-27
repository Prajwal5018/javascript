import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username:"prajwal",
    age:20
  }
  let newArr=[1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl '>Tailwind CSS Test</h1>
      <Card channel="prajwalshet" someObj={myObj} someObj1={newArr} />
      <Card channel="prajwaln"/>
     

    </>
  )
}

export default App
