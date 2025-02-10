import React from 'react'
import './Drawer.css'

const Drawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <h1>Header</h1>
      <button onClick={handleOpen}>Open</button>

      {isOpen && (
        <div className="drawer">
          <button onClick={handleOpen}>Close</button>
          <h2>Drawer Content</h2>
          <div className="drawer-content">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
            <li>Item 7</li>
            <li>Item 8</li>
            
          </div>
        </div>
      )}
    </>
  )
}

export default Drawer