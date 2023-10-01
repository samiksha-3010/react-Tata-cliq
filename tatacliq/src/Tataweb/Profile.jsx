 import React from 'react'
 import './Profile.css'
 
 function Profile() {
   return (
    <>
    <div id='screen'>
     <div id='profile-page'>
          <div id='left-page'>
          <div id='menu'><p>Menu</p></div>
            <div id='icon-image'>
                 </div>
                 <div  className='wishlest-icon'>
                  <img src='https://www.tatacliq.com/src/general/components/img/WL5.svg' />
                  <span>My Wishlist</span>
                   </div>
                   <div className='wishlest-icon'>
                  <img src='https://www.tatacliq.com/src/general/components/img/order-history.svg'/>
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
                  <img src='https://www.tatacliq.com/src/account/components/img/card.svg'/>
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
          
          <div id='right-page'>
            <div id='information'> <p>General Information</p></div>
            <div className='besic-deatl'>
                <b>Besic Detail</b>
                <p>Add</p> 
                </div>
                <div className='detalis'>
                  <div className='name-details'>

                  <div className='first-name'><p>First Name</p></div>
                  <div className='second-name'><p>Samiksha yadav</p></div> 
                
                  </div>
                  <div className='name-details'>

                   <div className='first-name'><p>Last Name</p></div>
                    <div className='second-name'><p>Yadav</p></div> 

                      </div>
                      <div className='name-details'>

                        <div className='first-name'><p>Adress</p></div>
                           <div className='second-name'><p>Mumbai</p></div> 

                             </div>
                              </div>
                              <div className='besic-deatl'>
                <b>Contact Details</b>
                <p>Edit</p> 
                </div>
                <div className='detalis'>
                  <div className='name-details'>

                  <div className='first-name'><p>Mobile Nu</p></div>
                  <div className='second-name'><p>859189099</p></div> 
                
                  </div>
                  <div className='name-details'>

                   <div className='first-name'><p>Email</p></div>
                    <div className='second-name'><p>samiksha30102@gmail.com</p></div> 

                      </div>
                     
                              </div>

                              <div className='besic-deatl'>
                <b>Personal Details</b>
                <p>Edit</p> 
                </div>
                <div className='detalis'>
                  <div className='name-details'>

                  <div className='first-name'><p>Gender</p></div>
                  <div className='second-name'></div> 
                
                  </div>
                  
                     
                              </div>
                              
                              
                               </div>
                              <div id='last-page'>
                              <div id='cercle'>
                                <img style={{width: '95%' , height: '55px', borderRadius: '100px'}} src='https://tse2.mm.bing.net/th?id=OIP.7SdhqriaKA9IvdxTU0lBUQHaHJ&pid=Api&P=0&h=180'/>
                                <p>samiksha30102@gmail.com</p>


                              </div>

                              </div>
        </div>
        </div>
     </>
   )
 }
 
 export default Profile