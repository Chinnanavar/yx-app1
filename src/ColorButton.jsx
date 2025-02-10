import React, { useState } from 'react'

const ColorButton = () => {

  const [color, setColor] = useState('red')
  return (
    <div>
      <p>The color is <span style={{ color: color }}>{color}</span></p>
      <button onClick={() => setColor('red')}>Red</button>
      <button onClick={() => setColor('green')}>Green</button>
      <button onClick={() => setColor('blue')}>Blue</button>
      <button onClick={() => setColor('yellow')}>Yellow</button>
    </div>
  )
}

export default ColorButton