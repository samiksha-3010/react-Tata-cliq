import React, { useState } from 'react'
import './MProfile.css'
import axios from 'axios';

import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const MProfile = () => {

  const router = useNavigate();
  const [userdata, setUserdata] = useState({
      name: "",
      email: "",
      password: "",
      confirmpassword:"",
      role: "Buyer",
    });
    const handlechange = (event) => {
      setUserdata({ ...userdata, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (userdata.name && userdata.email && userdata.password && userdata.confirmpassword && userdata.role) {
          if (userdata.password === userdata.confirmpassword) {
              const response = await axios.post("http://localhost:8000/register", { userdata });
              if (response.data.success) {
                  setUserdata({ name: "", email: "", password: "", confirmpassword: "", role: "Buyer" })
                  router('/Login-Logout')
                  toast.success(response.data.message)
                 
              } else {
                  toast.error(response.data.message)
              }
  
          } else {
              toast.error("Password and Confirm Password not Matched.")
          }
      } else {
          toast.error("All fields are mandtory.")
      }
    };
  
    function selectrole(event) {
      // console.log(event.target.value ,"role")
      setUserdata({ ...userdata, ["role"]: event.target.value });
    }
  return (
    <div id='myprofile'>

        <h1>Welcome to Tata CLiQ</h1>
        <p>Please enter your mobile number</p>

        <form onSubmit={handleSubmit}>
                <input  className='input-tata'
                  placeholder="Name"
                  value={userdata.name}
                  type="text"
                  onChange={handlechange}
                  name="name"
                /><br/>
                <input  className='input-tata'
                  placeholder="E-mail Address"
                  value={userdata.email}
                  type="email"
                  onChange={handlechange}
                  name="email"
                />{" "}
                <br />
                <label htmlFor="">Select Role : </label>
                <select id="select" onChange={selectrole}>
                  <option value="Buyer">Buyer</option>
                  <option value="Seller">Seller</option>
                </select><br/>
                <input  className='input-tata'
                  placeholder="Password"
                  value={userdata.password}
                  type="password"
                  onChange={handlechange}
                  name="password"
                /><br/>
                 <input  className='input-tata'
                  placeholder="Password"
                  value={userdata.confirmpassword}
                  type="password"
                  onChange={handlechange}
                  name="confirmpassword"
                /><br/>
        {/* <div id='mobile-number'>
            <p>Mobile Number</p>
        
        </div> */}
         <div id='email-adress'>
         <h4>Use Email Address</h4>
        <p>This site is protected by reCAPTCHA and the <u><span>Google Privacy Policy</span></u> andTerms of Service apply.
<u><span>By continuing</span></u> , you agree to our Terms of Use  <u><span>Privacy Policy</span></u> 
</p>
         </div>
         <div id='buttton'><button>Countinue</button></div>
         </form>
    </div>
  )
}

export default MProfile