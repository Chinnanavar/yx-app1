import React, { useState } from 'react'

const Toggle = () => {
  const [sc, setSc] = useState(false);
  return (
    <><p>{sc ? 'ON' : 'OFF'}</p>
      <button onClick={() => setSc(!sc)}>Toggle</button>
    </>

  )
}

export default Toggle