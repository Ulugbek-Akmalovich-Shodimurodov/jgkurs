import React, { useState } from 'react'

export default function Counter() {

    let [count, setCount] = useState(0);

    function inc(){
        return count = count + 1
    }

    function dec(){
        return count === 0 ? 0 : count = count - 1
    }
  return (
    <>
    <button onClick={()=> setCount(dec())}>-</button>
    <span>{count}</span>
    <button onClick={()=> setCount(inc())}>+</button>
    </>
  )
}
