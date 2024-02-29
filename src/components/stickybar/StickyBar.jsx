import React from 'react'
import linkedin from '../../asserts/socialmedia/linkedin.svg'
import facebook from '../../asserts/socialmedia/facebook.svg'
import instagram from '../../asserts/socialmedia/insta.svg'
import youtube from '../../asserts/socialmedia/youtube.svg'
import WhatsApp from '../../asserts/socialmedia/whatsapp.svg'

import './StickyBar.css'

const StickyBar = () => { 
    window.addEventListener('scroll', function () {
        var navbar = document.querySelector('.stickybarcontainer');
        var scrollY = window.scrollY;
      
        // Add the 'sticky' class when scrolling down 120 pixels
        if (scrollY > 120) {
          navbar.classList.add('sticky-div');
        } else {
          navbar.classList.remove('sticky-div');
        }
      });
  return (
    <div className='stickybarcontainer '>
        <div className="stickybarMain">
            <div className="stickyBtns">
                <a href=" https://www.facebook.com/people/Whitespace/61556230659754/?mibextid=JRoKGi" target='_blank'>
                    <img src={facebook} alt="white space facebook" />
                </a>
                <a href="https://in.linkedin.com/company/whitespacerealestate-in" rel="noreferrer" target='_blank'>
                    <img src={linkedin} alt="white space linkedin" />
                </a>
                <a href="https://youtube.com/@whitespace.realestate?si=Y06-Jac3ZenSYLTk" rel="noreferrer" target='_blank'>
                    <img src={youtube} alt="white space youtube" />
                </a>
                <a href="https://www.instagram.com/whitespace_realestate/?igsh=bmZ0ZWRhdW9jczFw" rel="noreferrer" target='_blank'>
                    <img src={instagram} alt="white space instagram" />
                </a>
                <a href="https://wa.me/7028365040" rel="noreferrer" target='_blank'>
                    <img src={WhatsApp} alt="white space instagram" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default StickyBar