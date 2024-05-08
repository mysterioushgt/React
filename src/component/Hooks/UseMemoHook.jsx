import React, { useEffect } from 'react'
import { useState ,useMemo} from 'react';

function UseMemoHook() {
    const [count, setData] = useState(0);
  const [item, setItem] = useState(10);

//   function multiCount() {
//     console.log("multiCount")
//     return count * 5
//   }

  const multiCountMemo = useMemo(function multiCount() {
    console.log("multiCount")
    return count * 5
  }, [count])

// useEffect(()={
//     multiCount()
// },{count})

  return (
    <div>
        <h1>UseMemoHook</h1>
      <h1>Hooks in React : {count}</h1>
      <h1>Hooks in item: {item}</h1>
      {/* <h2>{multiCount()}</h2> */}
        
        0
          <button onClick={() => setData(count + 1)}>Update State</button>
      <button onClick={() => setItem(item * 10)}>Update Item</button>
    </div>
  )
}

export default UseMemoHook