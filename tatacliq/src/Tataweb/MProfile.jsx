import React from 'react'
import './MProfile.css'


const MProfile = () => {
  return (
    <div id='myprofile'>
        <h1>Welcome to Tata CLiQ</h1>
        <p>Please enter your mobile number</p>
        <div id='mobile-number'>
            <p>Mobile Number</p>
        <input  type='value' />
        </div>
         <div id='email-adress'>
         <h4>Use Email Address</h4>
        <p>This site is protected by reCAPTCHA and the <u><span>Google Privacy Policy</span></u> andTerms of Service apply.
<u><span>By continuing</span></u> , you agree to our Terms of Use  <u><span>Privacy Policy</span></u> 
</p>
         </div>
         <div id='buttton'><button>Countinue</button></div>
    </div>
  )
}

export default MProfile