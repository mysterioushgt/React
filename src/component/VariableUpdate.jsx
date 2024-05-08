import React from 'react'

function VariableUpdate() {

    let name="pninfosys"
    function updateData()
    {
        name="ram"
        alert(name)
    }
    console.log("component load")
  return (
    <>
    <h1>variable update {name}</h1>

    <button onClick={updateData}> Update Variable</button>
    
    </>
  )
}

export default VariableUpdate