import React, { useState } from 'react'

const Register = () => {
  const [data, setData] = useState({ name: '', email: '', password: '' })
  
  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value })
  }
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3034/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.message);
  };
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register