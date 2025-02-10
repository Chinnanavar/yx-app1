import React, { useEffect, useState } from 'react'
import './Bdata.css'

const Bdata = () => {
  const [data, setdata] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/api/data')
      .then(res => res.json())
      .then(data => setdata(data))
      .catch(err => console.error(err))
  },[])
  return (
    <>
      <h1>Api</h1>
      <div className="card">
      {data.map((data) => {
        return (
        <div key={data.id}  className="card-item">
            <h2>{data.name}</h2>
            <p>{data.email}</p>
              <p>{data.phone}</p>
          </div>
        )
      })}
      </div>
    </>
  )
}

export default Bdata