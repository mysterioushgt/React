/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function Usestate() {
         // Declare a new state variable, which we'll call "count"
         const [count ,setCount]=useState(0)
  return (
    
    <>
      <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
  </div>
    </>
  )
}

export default Usestate