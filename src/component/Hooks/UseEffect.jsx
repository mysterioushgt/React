import React, { useEffect,useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('useEffect')
    })

    useEffect(() => {
        console.log('componentDidMount')
    },[]) // only run once while loading

    return (
        <div>
            <h3>useEffect</h3>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default UseEffect