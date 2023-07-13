import React from 'react'
import './Checkout.css'

const Checkout = () => {
  return (
    <>
    <div id='screen'>
      <div id='checout'>
        <h2>Checkout</h2></div>
        <div id='check-out'>
            <div id='right-section'>
                <div id='shoping'>
                 <div id='first-div'>
                    <span>1</span>
                    <h4>Add Shipping Address</h4></div>
                     <div><u><p>Clear All</p></u></div>
                </div>
                <div id='data-fill'>
                    <div className='data-div-right'>
                        <div className='require'>Fist Name (requred*)</div>
                       <div><p>Last Name (requred*)</p></div>
                       
                    </div>
                    <div className='data-div-left'>
                    <div>Enter Pin Code (requred*)</div> 
                   </div>
                    
                </div>
               

            </div>
            <div id='left-section'></div>

        </div>
    </div>
    </>
  )
}

export default Checkout
