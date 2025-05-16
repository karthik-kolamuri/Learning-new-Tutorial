import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'


// function MyApp(){
//   return(
//     <div>
//       const a=document.createElement("a")
//       a.setAttribute("href","https://googlee.com")
//       a.innerHtml="Google"
//     </div>
//   )
// }
//in this way react doesn't understand the code
//instead we can use the following code
import React from 'react'
const reactElement=React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'Google'
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {reactElement}
  </StrictMode>,
)
