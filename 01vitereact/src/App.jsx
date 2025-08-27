
import Prajwal from "./prajwal"



function App() {
  const username ="my variable"
  

  return (
    // <div>
    //     {/* <h1>Learn React with vite | PS</h1> */}
    //   <Prajwal />

    // </div>

    <>
        <Prajwal />
        <h1>Learn React with vite | PS {username}</h1> //only evaluated expression for variable
        <p>test para</p>
      

    </>


  
  )
}

export default App
