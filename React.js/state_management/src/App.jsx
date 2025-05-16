import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount]=useState(15);
  // function addValue(){
  //   setCount(count+1);
  // }
  // const addValue=()=>{
  //   setInterval(() => {
  //     setCount(count+1)
  //     console.log(count)
  //   }, 1000);
    
  // }
  return(
    <>
      <h1>Welccome to React Course...{count}</h1>
      <h2>Counter Value : {count}</h2>
      {/* <button onClick={()=>{
        setInterval(()=>{
          let newCount=count+1
          setCount(newCount)
          // console.log(newCount);
           
        })
      }}>start</button> */}
      {/* here updating the value simultaneously can't work . it can be acheived by the baching and this can be acheived through callback  */}
      <button onClick={()=>{
        setInterval(()=>{
          setCount((prevCount)=>{
            console.log(prevCount);
            return prevCount+1
          })
        },1000)
      }}>Start</button>
      <button onClick={()=>{
        clearInterval()
      }}>Pause</button>
      <button onClick={()=>setCount(15)}>Reset</button>
      <p>Footer : {count}</p>
    </>
  )
}

export default App
// upto this working well but the clearInterval is not working so we need to use useEffect or useRef to sort out the problem
