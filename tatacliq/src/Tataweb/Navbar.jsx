import React from 'react'
import './Nabvar.css'
const Navbar = () => {
  return (
    <>
    <div id='navbar'>
    <div id='divfirst'>
        <img src='https://coupontrends.in/img/1477323360_tatacliq.png'/>

    </div>
    <div id='divsecond'>
        <div id='text'>
        <span>Tata Cliq Luxiary</span>
          
                <p>Cilq Cash</p>
                <p>Gift Card</p>
                <p>Cliq Care </p>
                <p>Track Order</p>
               <p>SignIn/SighUp</p>               

          

        </div>
        <div id='icon'>
            <div id='child1'>
            <p>Cetegries</p>
            <i class="fa-solid fa-chevron-down"></i>
           
            </div>
            <div id='brand'>
                <p>Brand</p>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div id='search'>
                <div id='search1'>
            <i class="fa-solid fa-magnifying-glass"></i>
                <input type='search' placeholder='search for cetegreis'/>
                </div>
            </div>
            <div id='bag'>
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-bag-shopping"></i>
            </div>
        </div>
    </div>
    </div>

    </>
  )
}

export default Navbar