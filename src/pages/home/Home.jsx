import React, { useState, useRef } from 'react'
import Callback from '../../components/callback/Callback'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './Home.css'

// importing selers and buyrs data  
import { SellerData,buyersData,assertData, testimonalData } from '../../data'

// whiteSpace Image  
import whiteSpace from '../../asserts/images/whiteSpaceimage.png'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import CountUp from "react-countup";
import StickyBar from '../../components/stickybar/StickyBar'



const Home = () => {
  const [isHelp,setIsHelp] = useState(false)
  const [isSeller,setIsseller] = useState(true)

  const wrapperRef = useRef(null);

  const handlercb = () => {
    setIsHelp(true)
    window.scrollTo(0, 0);
  }
 


  return (
    <div>
      <Header />
      <div className="heroContainer">
           <div className="heromiddleContainer">
              <p className="heromainHeading">Your search for Dream property ends here!</p>
              <p className="herosubHeading">Revolutionizing Real Estate: one platform for <span className='mainsmalltxt'>Buyers</span> , <span className='mainsmalltxt'>Sellers</span>, and <span className='mainsmalltxt'>Realtors</span>. Simplifying, Empowering, and Making it easy for all.</p>
              <button className='getaCallbackbtn' onClick={handlercb}>Get a call back</button>
           </div>
      </div>
        <div className="ourservicesContainer">
          <div className="ourServicemainCon">
            <div className="sectionHeadingText">
                Our Services 
            </div>
            <div className="sectionSwitchingTabs">
              <div className={`${isSeller ? "firstSec active" : "firstSec"}`}  onClick={()=>setIsseller(true)}>Sellers</div>
              <div className={`${isSeller ? "secondSec" : "firstSec  active"}`} onClick={()=>setIsseller(false)}>Buyers</div>
            </div>
            {
              isSeller ?
               
              <div className="sellersSection">   
              {
                SellerData.map((each)=> 
                <div className="oterServiceCard" key={each.id}>
                <div className="ourServiceCard">
                    <div className="imgdiv">
                        <img src={each.img} alt={each.title} />
                    </div>
                    <div className="cardHeading">
                        {each.title }
                    </div>
                    <div className="cardSubHeading">
                        {each.subTitle}
                    </div>
                  
                </div>
                <div className="borderReddiv"></div>
            </div>
                
                )
              }
             

               </div>
              : null
            }
              {
                !isSeller  ? 
                <div className="buyersSection">
                {
                   buyersData.map((each)=> 
                   <div className="oterServiceCard" key={each.id}>
                       <div className="ourServiceCard">
                           <div className="imgdiv">
                               <img src={each.img} alt={each.title} />
                           </div>
                           <div className="cardHeading">
                               {each.title }
                           </div>
                           <div className="cardSubHeading">
                               {each.subTitle}
                           </div>
                         
                       </div>
                       <div className="borderReddiv"></div>
                   </div>
                   
                   )
                 } 
               </div> : null
              }
           
          </div>
        </div>
        <div className="imagecontainer">
            <div className="mainImageContainer">
                      <img src={whiteSpace} alt="White Space banner" />
            </div>
        </div>
        <div className="assertData wrapper container" ref={wrapperRef}>
          <div className="mainAssertData">
            {
              assertData.map(each => 
                <div className="eachAssert" key={each.id}>
                  <p className="count">
                    <CountUp end={each.count}  enableScrollSpy={true}duration={5}/>
                    <span>+</span></p>
                  <p className="assertitle">
                    {each.title}
                  </p>
             </div>
                )
            }
          </div>
        </div>
        <div className="testimonialContainer">
            <div className="testmonialsCommon">
                <div className="sectionHeadingText">
                    Customer Voice 
                </div>
                <div className="testmonialSliders">
                      <AwesomeSlider >
                        {
                          testimonalData.map(each => 
                            <div className='eachestmonialwraper'  key={each.id}>
                              <div className="eachtestimonals">
                                 <p className="testmonislcmt">{each.comment}</p> 
                                 <p className="personName">By : {each.personname}</p>
                                <p className="persondesignatio">{each.prsonDesignatio}</p>
                            </div>
                            </div>
                           
                            )
                        }                            
                     </AwesomeSlider>
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

export default Home