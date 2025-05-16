// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'

function App() {
  const [color,setColor]=React.useState("olive");
  return(
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:{color}}}>
        <div className="fixed flex felx-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl">
            <button onClick={()=>{
              setColor(red)
            }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black'>test</button>
            <button onClick={()=>{
              setColor(blue)
            }} className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black'>test2</button>
          </div>
        </div>
      </div>
    
    </>
  )
    
  
}

export default App
