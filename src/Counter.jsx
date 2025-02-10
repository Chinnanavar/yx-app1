import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const handlePlus = (() => {count<10 ? setCount(count+1) : setCount(10)})
  const handleMinus = (() => {count>0 ? setCount(count-1) : setCount(0)})
  return (
    <>
      <h1>Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={handlePlus}>Plus</button>
      <button onClick={handleMinus}>Minus</button>
   </>
  )
}

export default Counter