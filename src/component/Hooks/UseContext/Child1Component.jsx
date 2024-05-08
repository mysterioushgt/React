import React from 'react'
import Child2Component from './Child2Component'

function Child1Component() {
    return (
        <div>
            <h1>Child1Component</h1>

            <Child2Component />
        </div>
    )
}

export default Child1Component