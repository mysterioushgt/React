import React, { memo } from 'react'

function Children({Increment}) {
    console.log("children rendered !")
    return (
        <div>


            <h1>Children component</h1>
            <button onClick={Increment}>Increment</button>
        </div>
    )
}

export default memo(Children)