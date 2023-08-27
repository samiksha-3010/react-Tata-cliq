

import React from 'react'
import './Profile.css'

function RegisterPage() {
  return (
    
   <>
   <div id='screen'>
    <div id='profile-page'>
         <div id='left-page'>
         <div id='menu'><p>Menu</p></div>
           <div id='icon-image'>
                </div>
                <button  style={{width:"40%",height:"40px",borderRadius:"10px","backgroundColor":"red"}}>Login/Register</button><button style={{width:"40%",height:"40px",borderRadius:"10px","backgroundColor":"blue"}}>Logout</button>
                <div  className='wishlest-icon'>
                 <img src='https://www.tatacliq.com/src/general/components/img/WL5.svg' />
                 <span>My Wishlist</span>
                  </div>
                  <div className='wishlest-icon'>
                 <img src='https://www.tatacliq.com/src/general/components/img/order-history.svg' />
                 <span>Order History</span>
                  </div>

                  <div className='wishlest-icon'>
                 <img src='https://www.tatacliq.com/src/account/components/img/Neupass_monochrome.svg' />
                 <span>Neu Pass</span>
                  </div>
                  <div className='wishlest-icon'>
                 <img src='https://www.tatacliq.com/src/account/components/img/addressbook.svg' />
                 <span>Adress Book</span>
                  </div>
                  <div className='wishlest-icon'>
                 <img src='https://www.tatacliq.com/src/account/components/img/brand.svg' />
                 <span>Brand</span>
                  </div>
                  <div className='wishlest-icon'>
                 <img src='https://www.tatacliq.com/src/account/components/img/card.svg' />
                 <span>Saved Payment</span>
                  </div>
                  <div className='wishlest-icon'>
                 <img src='https://www.tatacliq.com/src/account/components/img/alert.svg' />
                 <span>Alert& Coupan</span>
                  </div>
                  <div className='wishlest-icon'>
                 <img src='https://www.tatacliq.com/src/account/components/img/giftCards.svg' />
                 <span>Gift Card</span>
                  </div>
                  <div className='wishlest-icon'>
                 <img src='https://www.tatacliq.com/src/account/components/img/cliqCash.svg' />
                 <span>cLIQ Cash</span>
                  </div>
                  <div className='wishlest-icon'>
                 <img src='https://www.tatacliq.com/src/account/components/img/addressbook.svg' />
                 <span>Manage Notification</span>
                  </div>
                  <div className='setting'>
                 <img src='https://www.tatacliq.com/src/account/components/img/settingsRed.svg' />
                 <span>Setting</span>
                  </div>

         </div>
         
       
       </div>
       </div>
    </>
  )
}

export default RegisterPage