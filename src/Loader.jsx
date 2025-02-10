import React, { useEffect, useState } from 'react'
import './Lader.css'

const Loader = () => {
  const [load, Setload] = useState(false)
  const handleLoad = () => {
    Setload(true)
    setTimeout(() => {
      Setload(false)
    }, 3000)
  }
  return (
    <>
      <button onClick={handleLoad}>Loader</button>

      {load &&
        (<div className='loader'>
        <div className="spinner">
          <div className="spinner-inner">
          </div>
        </div>
      </div>)}
    </>
  )
}

export default Loader