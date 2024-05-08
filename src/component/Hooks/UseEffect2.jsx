import React, { useEffect } from 'react'
import { useState } from 'react'

function UseEffect2() {
  const [content, setContent] = useState('posts')
  const [count, setCount] = useState(0)
  //map
  const [items, setItems] = useState([])

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/todos/1') //API get
    // .then(response => response.json())
    // .then(json => console.log(json))

    fetch('https://jsonplaceholder.typicode.com/' + content)
      .then(response => response.json())
      //.then(json => console.log(json))
      .then(json => setItems(json))
  }, [content])


  console.log(items)

  return (
    <div><button onClick={() => setContent('posts')}>Posts</button>
      <button onClick={() => setContent('users')}>users</button>
      <button onClick={() => setContent('comments')}>comments</button>
      <h1>{content}</h1>
      <button onClick={() => setCount(count + 1)}>count {count}</button>

      <ul>
                {items.map(item=>{
                    return <li key={item.id}>{item.id}</li>
                })}
               
            </ul>
    </div>
  )
}

export default UseEffect2