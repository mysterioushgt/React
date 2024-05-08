import React, { useState } from 'react'
//usestate is used for variable update
function UseState() {
    
    const [count,setcount] =useState(100)
    function updateCount()
    {
        setcount(count+1)
    }
console.log("load component")


  return (
    <>
    <h1>UseState: {count}</h1>

    <button onClick={updateCount}>UpdateData</button>

    </>
  )
}

export default UseState