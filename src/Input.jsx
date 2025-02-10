import React, { useState } from 'react'

const Input = () => {
  const [input, setInput] = useState('')
  return (
    <>
      <p>{input}</p>
      <input type="text"  value={input} onChange={(e) => setInput(e.target.value)}/>
    </>
  )
}

export default Input