import React from 'react'
import { useState,useEffect,useCallback } from 'react'
import './App.css'
export const App = () => {
  const [password, setPassword] = useState('')
  const [length,setLength]=useState(8)
  const [isNumberAllowed,setIsNumberAllowed]=useState(false);
  const [isSpecialAllowed,setIsSpecialAllowed]=useState(false);

    const genPassword=useCallback(()=>{
      let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";;
      if(isNumberAllowed){
        str+="0123456789"
      }
      if(isSpecialAllowed){
        str+="!@#$%^&*()_+"
      }
    
      let pass="";
      for (let i =1; i <= length; i++) {
        const randomIndex=Math.floor(Math.random()*str.length);
        pass+=str.charAt(randomIndex);
      }
      setPassword(pass);
    },[isNumberAllowed,isSpecialAllowed,length])

    useEffect(()=>{
      genPassword();
    },[isNumberAllowed,isSpecialAllowed,length])

    const copyToClipBoard=()=>{
      console.log(window.navigator);
      navigator.clipboard.writeText(password)
      alert(`Password copied to clipboard : ${password}`)
    }

  return (
    <div className='justify-center text-center m-auto '>
      <h1 className='text-center '>Password generatorrrrrrrrrr...</h1>
      <div>
         <input  className='bg-white shadow-lg text-black rounded-full px-4 py-1'
         type="text" 
         value={password}
         readOnly
         />
         <button className=' bg-blue  text-white ' onClick={copyToClipBoard}>Copy</button>
         <div>
            <input className='cursor-pointer' type="range" id='length' min={8} max={50} value={length} curso onChange={(e)=>setLength(e.target.value)} />
            <label htmlFor="length">Length: {length}</label>
            {/* <span>{length}</span> */}
            <input type="checkbox" defaultChecked={isNumberAllowed} onChange={(e)=>{
                setIsNumberAllowed(e.target.checked)
            }} />Number Allowed
            <input type="checkbox" defaultChecked={isSpecialAllowed} onChange={(e)=>{
                setIsSpecialAllowed(e.target.checked)
            }} />Special  Allowed
         </div>
      </div>

    </div>
  )
}
export default App