import React, { useState } from 'react'
import './Accordian.css'

const Accordian = () => {
  const [yc, setyc] =useState(false)
  return (
    <>
      <h1>Accordian</h1>
      <div className='container'>
      <h4>Title</h4>
      <button onClick={() => setyc(!yc)} className='btn'>Toggle</button>
      {yc && <p className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil soluta blanditiis quis neque corporis consequatur quisquam eveniet cum omnis, adipisci aut optio quasi distinctio placeat commodi reiciendis quibusdam? Autem deserunt praesentium amet eligendi atque illo hic est ipsam recusandae iste, doloribus, ipsa possimus rerum. Rem libero, quisquam sapiente ducimus,</p>}
      </div>
    </>
  )
}

export default Accordian