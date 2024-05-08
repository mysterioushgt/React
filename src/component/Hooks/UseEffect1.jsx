import React from 'react'
import { useEffect, useState } from 'react';

function UseEffect1() {

    const [count, setCount] = useState(0);
    const [data, setData] = useState(100);

    useEffect(() => {
        console.log('hello count')
    }, [count])

    useEffect(() => {
        console.log('hello data count')
    }, [data])


    return (
        <div>
            <h3>useEffcet1</h3>
            <p>You clicked count {count} times</p>
            <p>You clicked data {data} times</p>
            <button onClick={() => setCount(count + 1)}>
                Count
            </button>
            <button onClick={() => setData(data + 1)}>
                Data count
            </button>
        </div>
    )
}

export default UseEffect1