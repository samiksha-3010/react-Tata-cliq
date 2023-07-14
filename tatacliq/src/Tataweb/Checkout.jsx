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
                    {/* <div><p>1</p></div> */}
                  <h4>Add Shipping Address</h4></div>
                     <div><u><p>Clear All</p></u></div>
                </div>
                <div id='data-fill'>
                    <div className='data-div-right'>
                        <div><p>Fist Name (requred*)</p></div>
                       <div><p>Last Name (requred*)</p></div>
                       </div>

                       {/* <div className= 'data-div-second'></div>    
                              ***************inComplite*********** */}

                   
                  
                      
                   
                     
                      
                    
                    <div className='data-div-left'>
                    <div id='pin-code'><p>Enter Pin Code (requred*)</p></div> 
                    <div id='adress'><p>Flat/House No., Floor, Building/Company/Apartment Name,
                       Road/Street Name, Area, Colony,Sector, Village (Required)*</p></div>
                       <p>Character Limit : 120</p>
                    <div id='number'> <p>Enter 10 digit Number</p></div>
                   </div>
                   </div>
                  <div className='home-div'>
                      <div><p>Home</p></div>
                      <div><p>Office</p></div>
                       </div>
                       <div className='cancel-div'>
                       <div  id='div-1'><p>Cancel</p></div>
                    <div id='contunue'><p>Save & Countune</p></div>
                      
                    </div>
                   

                    </div>
                  
                   
            <div id='left-section'>
              <div className='left-section-first'>
                <div><p>Bag Total</p></div>
                <div>₹6140.00</div>

              </div>
              <div className='left-section-first'>
                <div><p>Processing Fees</p></div>
                <div style={{color: 'green'}}>FREE</div>

              </div>
              <div className='left-section-first'>
                <div><p>Product Discount(s)</p></div>
                <div>-₹4228.00</div>

              </div>
              <div className='left-section-first'>
                <div><p>Bag Total</p></div>
                <div>₹6140.00</div>

              </div>
              <div className='order'><p>You will save ₹4228.00 on this order</p></div>
              <div className='last-div'>
                <div><p>Total Payable</p></div>
                <div><p>₹1912.00</p></div>
              </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Checkout
