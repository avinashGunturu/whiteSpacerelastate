import React, { useState } from 'react'
import './Header.css'
import logo from '../../asserts/images/logo.png'
import Callback from '../callback/Callback'
import Contactus from '../contactus/Contactus'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isHelp,setIsHelp] = useState(false)
  const [ isContactUS ,setIsContactUS] = useState(false)

  const handleContact = ( ) => {
    window.scroll(0,0)
       setIsContactUS(true)
       setIsHelp(false)
  }

  const handleHelpCLick = ()=> {
    window.scroll(0,0)
    setIsContactUS(false)
    setIsHelp(true)
  }
   
  return (
    <>
        <div className='mainHeaderDiv'>
          <div className="mainContainer">
              <Link to='/' className="imgDiv">
                  <img src={logo} alt="White space logo" />
              </Link>
              <div className="navlinksDiv">
                <Link to="/" className="eachlink home">Home</Link>
                <Link to="/about" className="eachlink">About Us</Link>
                <div className="eachlink" onClick={handleContact}>Contact Us</div>
              </div>
              <div className="helpDiv">
                <div className="helpButton" onClick={handleHelpCLick}>
                    Help
                </div>
              </div>
          </div>
        </div>
        {
          isHelp ? 
              <Callback setIsHelp={setIsHelp} />
          :null
        }
       {
        isContactUS  ? 
        <Contactus  setIsContactUS={setIsContactUS} />  : null
       }
       
        
    </>
  )
}

export default Header