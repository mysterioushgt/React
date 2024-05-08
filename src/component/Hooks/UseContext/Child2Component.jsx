import React, { useContext } from 'react'
import { myContext } from './UseContext1'


function Child2Component() {

    const data = useContext(myContext)

  return (
    <div>Child2Component {data}</div>
  )
}

export default Child2Component