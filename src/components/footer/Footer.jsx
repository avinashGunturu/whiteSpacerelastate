import React from 'react'
import logo from '../../asserts/images/logo.png'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className="fottermainContainer">
          <Link to='/' className="logoContainer">
            <img src={logo} alt="white space" />
          </Link>
          <div className="copieWrite">© whitespace 2024 | All Rights Reserved</div>
      </div>
    </div>
  )
}

export default Footer