import React from 'react'

function Card({channel}) { //use {props} also and then props.channel
  // console.log("props",props);
  console.log(channel);
  
  
  return (
    <div className='bg-red-800  color-white'>Card {channel}</div>
  )
}

export default Card