import React from 'react'
import { useState } from 'react'
import Counter from './Counter';

function UseReduce() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Count:{count}</h2>
            <button onClick={() => setCount(count + 1)}>INCREMENT Count</button>
            <button onClick={() => setCount(count - 1)}>DECREMENT Count</button>

            {/* Example 2 */}
            <br />
            <br />

            <Counter/>
        </div>
    )
}

export default UseReduce