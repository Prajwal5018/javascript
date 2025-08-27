import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';  
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}
// function to tree (parsing) up
// const ReactElement = {
//     type: 'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children: 'Click me to visit google'
// } //this doesnt not work

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser="prajwal and react learning" //new variable

//but this down one works
const reactElement=React.createElement(
  'a', //tag
  {href:'https://google.com',target:"_blank"},
  'click me to visit google',
  anotherUser //extra new variable can be added here 
  

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <MyApp /> */}
    {/* <ReactElement/> */}
    {/* {ReactElement} */}
    {/* {anotherElement} */}
    {reactElement}
  </StrictMode>,
)
