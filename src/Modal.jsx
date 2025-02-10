import React, { useState } from 'react'
import './Modal.css'

const Modal = () => {
  const [open, setOpen] = useState(false)

  const style = {
  backgroundColor: "#333",
  color: "#fff",
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
};
const style2 = {
  backgroundColor: "rgb(18, 97, 199)",
  borderRadius: "5px",
  color: "#333",
  height: "300px",
  width: "400px",
  boxShadow: "0 0 5px rgb(253, 6, 6)",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  animation: "modal 1s",
  };
  const style3 = {
  cursor: "pointer",
  padding: "10px 20px",
  border: "none",
  backgroundColor:" #3498db",
  color: "white",
  borderRadius: "5px",
  
  }
  const style4 = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "40px",
    padding: "10px",
  }

  
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <>
      <div className="conatiner"  style={style}>
        <h1>Modal</h1>
        <button onClick={handleClick} style={style3}>Open</button>

        {open && (
          <div className="modal" style={style2}>
            <h2 style={{padding: "10px", margin: "0", textAlign: "center"}}>Modal Content</h2>
            <nav style={style4}>
              <li>items 1</li>
              <li>items 2</li>
              <li>items 3</li>
              <li>items 4</li>
              <li>items 5</li>
              <li>items 6</li>
              <li>items 7</li>
              <li>items 8</li>
            </nav>
            <button onClick={handleClick} style={style3}>Close</button>
          </div>
        )}
      </div>
    </>
  )
}

export default Modal