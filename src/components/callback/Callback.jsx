import React, { useState,useRef} from 'react'
import emailjs from '@emailjs/browser';
import './Callbak.css'
const Callback = ({setIsHelp}) => {
    
    const[thankyou,setThankyou] = useState(false)
    const [rcb,setRcb] = useState(true)
    const [overlay,setOverly] = useState(true)
   
    const [mobileNumber,setMobileNumber] = useState("")
    const [mobileerror,setMobileError] = useState("")
    const [btnLoader,setBtnLoader] = useState(false)

    const handleCross = ()=> {
      setIsHelp(false)
      setOverly(false)
    }

    const handleCallClick = (e) => {
      setBtnLoader(true)
      if(mobileNumber === "" || mobileNumber === null || mobileNumber === undefined || mobileNumber.length < 10){
        setMobileError("Please Enter a valid Mobile Number")
        setBtnLoader(false)
      }else {
        sendEmail(e) 
      }
    }

    const handleOk = ( ) => {
      window.scrollTo(500, 0);
      setIsHelp(false)
      setOverly(false)
    }

    const handleMobileNumberCheck = (e) => {
      const input = e.target.value;
      // Use a regular expression to keep only numeric characters
      const numericInput = input.replace(/[^0-9]/g, '');
      const limitedInput = numericInput.slice(0, 10);
      setMobileNumber(limitedInput);
    }

  const YOUR_SERVICE_ID = "service_9qtf8ki"
  const YOUR_TEMPLATE_ID ="template_3wdmbkv"
  const YOUR_PUBLIC_KEY = "HqLcdXmMlLqXfcDNr"

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(YOUR_SERVICE_ID,  YOUR_TEMPLATE_ID, form.current, {
          publicKey: YOUR_PUBLIC_KEY,
        })
        .then(
          () => {
            setThankyou(true)
            setOverly(true)
            setRcb(false)
            setBtnLoader(false)
          },
          (error) => {
            console.log('FAILED...', error.text);
            setThankyou(false)
            setOverly(true)
            setRcb(true)
            setMobileError("Please close and try again.")
            setBtnLoader(false)
          },
        );
    };

  return (
    <>
    {
      rcb ?
        <div className='requestcallbackContainer'>
          <div className="crossbox" onClick={handleCross}>
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.25363 0.000569748C1.00542 0.000638213 0.762858 0.0784526 0.556968 0.224065C0.351079 0.369677 0.191215 0.57647 0.0978126 0.818007C0.00441047 1.05954 -0.018285 1.32485 0.0326278 1.58C0.0835406 1.83516 0.205748 2.06857 0.383627 2.25039L8.23562 10.4972L0.383627 18.744C0.263877 18.8647 0.168271 19.0094 0.102409 19.1694C0.0365475 19.3295 0.00175348 19.5017 6.45848e-05 19.6761C-0.00162432 19.8504 0.0298261 20.0233 0.0925739 20.1848C0.155322 20.3462 0.248106 20.4928 0.365491 20.6161C0.482877 20.7394 0.622505 20.8369 0.776198 20.9028C0.929892 20.9687 1.09456 21.0017 1.26056 20.9999C1.42656 20.9981 1.59055 20.9616 1.74294 20.8924C1.89532 20.8233 2.03304 20.7228 2.14801 20.5971L10 12.3503L17.852 20.5971C17.967 20.7228 18.1047 20.8233 18.2571 20.8924C18.4094 20.9616 18.5734 20.9982 18.7394 20.9999C18.9054 21.0017 19.0701 20.9687 19.2238 20.9028C19.3775 20.8369 19.5171 20.7394 19.6345 20.6161C19.7519 20.4928 19.8447 20.3462 19.9074 20.1848C19.9702 20.0233 20.0016 19.8504 19.9999 19.6761C19.9982 19.5017 19.9635 19.3295 19.8976 19.1694C19.8317 19.0094 19.7361 18.8647 19.6164 18.744L11.7644 10.4972L19.6164 2.25039C19.7967 2.06632 19.9198 1.82933 19.9697 1.57049C20.0195 1.31164 19.9938 1.04302 19.8958 0.799809C19.7978 0.556603 19.6321 0.350164 19.4205 0.207546C19.2089 0.0649285 18.9611 -0.00721496 18.7098 0.000569748C18.3856 0.0107143 18.078 0.153005 17.852 0.397296L10 8.64409L2.14801 0.397296C2.03173 0.27176 1.89268 0.171974 1.73906 0.103833C1.58545 0.0356926 1.42039 0.000579957 1.25363 0.000569748Z" fill="#101223"/>
              </svg>
          </div>
          <div className="requestcallBackCon">
            <p className="reqText">Request a call back</p>
            <p className="rcqsubheading">We are always ready. Just share your number for a call back</p>
            <div className="recactionCon">
              <form className="recactionCon" ref={form} onSubmit={(e)=>!btnLoader ? handleCallClick(e): null}>
                <input type="text" placeholder='7028365040' name='phone_number'  onChange={(e)=>handleMobileNumberCheck(e)}  value={mobileNumber}/>
                <div className="recCallme" type="submit" onClick={(e)=> !btnLoader ? handleCallClick(e): null }>
                  {
                    btnLoader ? 
                    // 
                    "Loading.."
                    : "Call Me"
                  }
                </div> 
              </form>
            </div> 
            {
              mobileerror ? <p className="mobilerror">{mobileerror}</p> : null
            }
            <p className="isSuperUrgent">Is it super urgent? Call us on</p>
            <div className="recContactNumber">+91 7028365040
    </div>
          </div>
        </div> : null
    }
    {
      thankyou ? 
        <div className="thankyouContainer">
              <p className="getbacktxt">We will get back to you.</p>
              <div className="thankyoutxt">Thank you</div>
              <div className="okbtn" onClick={handleOk}>Ok</div>
        </div> :null
    }
    {
      overlay ? 
       <div className="overlay"></div> : null
    }
    
    </>
  )
}

export default Callback