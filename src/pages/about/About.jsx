import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Callback from '../../components/callback/Callback'
import StickyBar from '../../components/stickybar/StickyBar'
import './About.css'
import logo from '../../asserts/images/whiteSpaceimage.png'
import firstone from '../../asserts/images/sravan.png'
import secondone from '../../asserts/images/santosh.png'
import linkedin from '../../asserts/socialmedia/linkedin.svg'
import insta from '../../asserts/socialmedia/insta.svg'




const About = () => {
  const [isHelp,setIsHelp] = useState(false)
  const handleisHelp = ()=> {
    window.scroll(0,0)
    setIsHelp(true)
  }
  return (
    <div>
      <Header />
       <div className="aboutSection">
         <div className="mainContentsec">
            <div className="introCon">
              <p className="fisrintroText">
                              In today’s  fast-paced real estate market, we understand the challenges
                faced by buyers in finding their dream properties, sellers in effectively
                marketing their homes, and realtors in navigating complex transactions.
                That’s why we are pioneering a new era of real estate services, where
                every aspect of the buying and selling process is streamlined and
                simplified.
              </p>
              <p className="secondIntroSection">
                              Our approach centres around the concept of amalgamation – bringing
                together buyers, sellers, and realtors onto a single integrated platform.
                Through all media platforms, comprehensive resources, and
                unparalleled support, we empower our clients to achieve their real estate
                goals with confidence and ease.
              </p>
            </div>
            <div className="imgContainer">
              <img src={logo} alt="White Space" />
            </div>
            <div className="introSection">
              <div className="eachIntroSection">
                 <div className="imageSection">
                       <img src={firstone} alt="white space CEO " />
                 </div>
                 <div className="textSection">
                     <p className="nametext">Sravan kumar reddy</p>
                     <p className="Designationtext">Co-founder- CEO</p>
                     <p className="wherestudied">Masters in Project Management (Eastern Michigan University, USA)</p>
                     <p className="wherestudied">Masters in Construction Management (Kent State University, Ohio, USA) </p>
                     <p className="abouttheySec">“ <span className='littlemaintext'> White space </span>is not just about buying and selling properties – we are
about building relationships and making dreams come true. Every
interaction is an opportunity to make a positive impact in someone’s life.”</p>
                     <a href="mailto:sravankreddy1917@gmail.com" className="emailid">
                     sravankreddy1917@gmail.com
                     </a>
                     <div className="socialmediaLinks"> 
                        <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/sravan-kumar-reddy-surakanti-7774a92b0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BXRTsjCtgSpicsRcWm%2B0MvQ%3D%3D">
                        <img src={linkedin} className='sociali' alt="sravan linked in account" /> 
                        </a>
                        <a   target='_blank' rel="noreferrer" href="https://www.instagram.com/nanireddy1917?igsh=bGNuMGljYmVzbWdw">
                        <img src={insta} className='sociali' alt="sravan instagram account" /> 
                        </a>
                     </div>
                 </div>
              </div>
              <div className="eachIntroSection secondeachsection">    
                 <div className="textSection">
                     <p className="nametext">Santosh Gade</p>
                     <p className="Designationtext">CO founder – CMO</p>
                     <p className="wherestudied">MBA in Digital Marketing - DY Patil group School of Management pune.</p>
                     <p className="abouttheySec">“As the CMO, I drive sales and elevate your brand in real estate.Through
strategic storytelling and client engagement, we showcase our expertise
and build lasting connections.”</p>
                     <a href="mailto:gvsantoshkumar6@gmail.com" className="emailid">
                     gvsantoshkumar6@gmail.com
                     </a>
                     <div className="socialmediaLinks"> 
                        <a  target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/santosh-gade06?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B9DPa3KK3QHGGtTjlJhem0A%3D%3D">
                        <img src={linkedin} className='sociali' alt="sravan linked in account" /> 
                        </a>
                        <a   target='_blank' rel="noreferrer" href="https://www.instagram.com/mr_santoshgade?igsh=MWg1OWRtM2x1bDNvNw%3D%3D">
                        <img src={insta} className='sociali' alt="sravan instagram account" /> 
                        </a>
                     </div>
                 </div>
                 <div className="imageSection">
                       <img src={secondone} alt="what space cmo" />
                 </div>
              </div>
            </div>
            <div className="whatanyHelpSection">
               <p className="wanthelp">Want Help ?</p>
               <div className="getcallbackbtn" onClick={handleisHelp}>Get a Callback</div>
            </div>
         </div>
       </div>
      <StickyBar />
      <Footer />
      {
          isHelp ? 
              <Callback setIsHelp={setIsHelp} />
          :null
        }
    </div>
  )
}

export default About