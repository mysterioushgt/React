import React, { createContext } from 'react'
import Child1Component from './Child1Component'

const myContext = createContext()

function UseContext1() {

    const name = 'Saloni'

  return (
    <div>
        <myContext.Provider value={name}>
            <h2>UseContext</h2>
            <Child1Component/>
        </myContext.Provider>
    </div>
  )
}

export default UseContext1 //export default used only once
export {myContext}