import React from 'react'

const Card = (props) => {
  console.log(props) ;
  
  return (
    <div>
      <img className='size-70 m-auto' src="https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg" alt="" />
      <h2 className='text-xl bg-blue-400 p-3 rounded'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, quos.</h2>
      <h3 className='text-md'>Name : {props.name}</h3>
      <h3 className='text-md'>Role : {props.role}</h3>

    
    </div>
  )
}

export default Card
