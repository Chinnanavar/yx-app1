import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Card.css'

const Card = () => {
  const [use, Setuse] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => Setuse(res.data))
  },[])
  return (
    <>
      {use.map((post) => {
        return (
          <div className="wrapper">
          <div className="container">
            
          <div key={post.id} className='card'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Card