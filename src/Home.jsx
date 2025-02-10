import React from 'react'

const Home = () => {

  const style = {
    color: "blue",
    fontSize: "20px"
  }

  const style2 = {
    color: "green",
    fontSize: "16px"
  }

  return (
    <div className='home'>
      <h2 style={style}>Home</h2>
      <p style={style2}>Welcome to the Home Page</p>
    </div>
  )
}

export default Home