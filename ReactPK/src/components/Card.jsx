import React from 'react'
import App from '../App';

const Card = (props) => {

  console.log(props.photu)

  return (
    <div className=' mr-5 bg-white text-black inline-block p-6 text-center rounded'>
      <img className='ml-8 h-32 w-32 rounded-full mb-3' src={props.photu} alt="" />
      <h1 className='text-2xl font-semibold mb-4'>{props.username} Surname</h1>
      <h4 className='text-blue-400'>{props.profession}</h4>
      <h2>City: {props.city}, Age: {props.age}</h2>
      <button className='bg-emerald-500 text-white px-4 py-2 rounded font-medium mt-4'>Add Friend</button>

      
    </div>
  );
}

export default Card