import React from 'react'
import './Data.json'
import  './Json.css'

const Json = () => {

  const data = require('./Data.json')
  return (
    <>
      <h1 className="heading">Employee</h1>
      <div className="conariner">
        {data.map((i) => {
          return (
            <div className="card" key={i.id}>
              <h1>{i.name}</h1>
              <h1>{i.age}</h1>
              <h1>{i.email}</h1>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Json