import React from 'react'

function SendDataChildToParentComponent(props) {
    const data={name:"ram",email:"raj@gmail.com"}
  return (
    <div>
    <button onClick={()=>props.alert(data)}>Click Me</button>
    </div>
  )
}

export default SendDataChildToParentComponent