import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(15)

  // let counter = 15

  const addValue=()=> {
    // console.log("value added",Math.random());
    // console.log("clicked",Math.random());
    // console.log("clicked",counter);
    // counter=counter+1
    // setCounter(counter+1)
    setCounter(prevCounter=> prevCounter+1)
    setCounter(prevCounter=> prevCounter+1)
    setCounter(prevCounter=> prevCounter+1)
    setCounter(prevCounter=> prevCounter+1)

    
  }
  const remoValue=()=>{
    setCounter(counter-1)
  }

  return (
    <>
    <h1>02counter</h1>
    <h2>Counter value:{counter}</h2>
    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br />
    <button
    onClick={remoValue}
    >remove value {counter}</button>
    <p>footer:{counter}</p>
    
    </>
    
  )
}

export default App
