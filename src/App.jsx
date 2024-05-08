import React, { useState } from 'react'
import Login from './component/Login'
import Register from './component/Register'
import Home from './component/Home'
import About from './component/About'
import { Routes, Route } from "react-router-dom"
import Contact from './component/Contact'
import VariableUpdate from './component/VariableUpdate'
import UseState from './component/UseState'
import HideShowToggle from './component/HideShowToggle'
import Condition from './component/Condition'
import Props from './component/Props'
import Class123 from './component/Class123'
import Cstate from './component/Cstate'
import ComponentDidMount from './component/LifeCycleMethod/ComponentDidMount'
import ShouldComponentUpdate from './component/LifeCycleMethod/ShouldComponentUpdate'
import UseEffect from './component/Hooks/UseEffect'
import UseEffect1 from './component/Hooks/UseEffect1'
import UseEffect2 from './component/Hooks/UseEffect2'
import ArrayListingWithMapFunction from './component/Hooks/ArrayListingWithMapFunction'
import ReuseComponent from './component/Hooks/ReuseComponent'
import SendDataChildToParentComponent from './component/Hooks/SendDataChildToParentComponent'
import Usestate from './component/Hooks/UseState'
import UseMemoHook from './component/Hooks/UseMemoHook'
import UseCallBack from './component/Hooks/UseCallBack'
import UseReduce from './component/Hooks/UseReduce'
import UseContext from './component/Hooks/UseContext'
import UseContext1 from './component/Hooks/UseContext/UseContext1'

function App() {

  const [name , setName] = useState('Saloni')
  const user = [
    {
      name: "anil", email: "ram@gmail.com", phone: 34455
    },
    {
      name: "anil", email: "ram@gmail.com", phone: 34455
    },
    {
      name: "anil", email: "ram@gmail.com", phone: 34455
    },
    {
      name: "saloni", email: "ram@gmail.com", phone: 34455
    }
  ]

  function parentAlert(data) {
    console.log(data)
    alert(data.name)
  }

  return (

    <>
      
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}



      {/* <VariableUpdate/> */}
      {/* <UseState/> */}
      {/* <HideShowToggle/> */}
      {/* <Condition/> */}
      {/* <Props n = {name} data = {{address:'morena', College:'itm'}} city = 'morena'/> */}
      {/* <Class123/> */}
      {/* <Cstate/> */}
      {/* <ComponentDidMount/> */}
      {/* <ShouldComponentUpdate/> */}
      {/* <UseEffect/> */}
      {/* <UseEffect1/> */}
      {/* <UseEffect2/> */}
      {/* <ArrayListingWithMapFunction/> */}
      {/* <Usestate/> */}
      
      
      {/* <h1>Reuse Component With List</h1>
      {
        user.map((item, i) =>

          // <h1>{item.nmae}</h1>
          <ReuseComponent data={item} />
        )
      } */}

      {/* <SendDataChildToParentComponent alert={parentAlert} />
       */}

       {/* <UseMemoHook/> */}
       {/* <UseCallBack/> */}
       {/* <UseReduce/> */}
       {/* <UseContext/> */}
       <UseContext1/>
    </>
  )
}

export default App