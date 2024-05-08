import React from 'react'

function Props(props) {
    console.log(props)
  return (
    <>
    <h1>Props</h1>
    <h1>{props.n}</h1>
    <h1>{props.data.address}</h1>
    <h1>{props.data.College}</h1>
    <h1>{props.city}</h1>
    </>
  )
}

export default Props