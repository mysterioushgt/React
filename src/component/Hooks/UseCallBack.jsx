import React from 'react'
import { useState , useCallback } from 'react';
import Children from './Children';

function UseCallBack() {

    const [count, setCount] = useState(0)
    console.log("parent rendered!")

    // example 2
    const [count2 ,setCount2] = useState(0)
    const incrementCount = () => {
        setCount2(count2 + 1)
    }

    const IncrementCount =useCallback(()=>{ //usecallback = to stop rendering of callback function
        setCount2((prevCount)=> prevCount+1)
        console.log("useCallback Hook");
    },[])

    return (
        <div>

            <h1>UseCallback </h1>
            {/* example 1 */}
            <h2>Count 1 : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <br></br><br></br>
            <h2>Count 2 : {count2}</h2>
            
            <Children Increment={IncrementCount}/>

        </div>
    )
}

export default UseCallBack