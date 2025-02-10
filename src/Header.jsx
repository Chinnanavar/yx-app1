import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { FaUser } from 'react-icons/fa'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {

  const location = useLocation();
  const [hideHeader, setHideHeader] = useState(false);
  const hideHeaderRoutes = ['/contact'];
  const navigate = useNavigate();

  useEffect(() => {
setHideHeader(hideHeaderRoutes.includes(location.pathname));
  }, [location.pathname]);
  
  if (hideHeader) {
  return null;
  }
  return (
    <div className='header'>
      <div className="left">
        Logo
      </div>
      <div className="center">
      <nav className='nav-item'>
          <li><Link to="/">Home</Link></li>
        <li onClick={()=> navigate('/Drawer')}>About</li>
        <li><Link to="/contact">Conatct</Link></li>
      </nav>
      </div>
      <div className="right">
        <span><FaUser size={15} /></span>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Header