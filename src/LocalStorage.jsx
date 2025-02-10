import React, { useState } from 'react'

const LocalStorage = () => {
  const [name, setName] = useState('')

  const handleSave = () => {
    localStorage.setItem('name', name)
  }
  
  const handleLoad = () => {
    const savedName = localStorage.getItem('name')
    setName(savedName)
  }
  return (
    <>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSave}>Save</button>

      <button onClick={handleLoad}>Load</button>
   </>
  )
}

export default LocalStorage