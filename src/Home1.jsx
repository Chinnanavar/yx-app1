import React from 'react'

const Home1 = ({color}) => {
  return (
    <div>
      <h1>The Color is <span style={{color:color}}>{color}</span></h1>
    </div>
  )
}

export default Home1