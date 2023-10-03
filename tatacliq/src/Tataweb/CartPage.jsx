import React from 'react'
import'./CartPage.css'
import { useNavigate } from 'react-router-dom'


function CartPage() {
    const router = useNavigate ()
    function Checkout(){
        router('/Checkout')
    }
  return (
    <div id='screen'>
 
        <div id='cart-first-page'>
            <div id='logo-imag'>
                <img src='https://coupontrends.in/img/1477323360_tatacliq.png'/>
            </div>
            <div id='profile-logo' >
                <img src='https://www.tatacliq.com/src/general/components/img/profile.png'/>
                <p>Samiksha</p>
            </div>
            
            </div>
            <div id='profile'>
                <div id='my-bag'>
                    <h2>My Bag</h2>
                </div>
                <div id='cheng-pin'>
                    <h4>Delhi,110001</h4>
                    <p> <u>Chenge-pinCode</u></p>

                </div>
                </div>
               

                <div id='main-cart-page'>
                
                <p>Apply a relevant coupon code here to avail
                         any additional discount. Applicable cashback
                         if any will be credited
                          to your account as per T&C.</p>
                          </div>

                          <div id='devide-section'>
                          
                          <div id='left-side'>
                            <div id='free-shoping'>
                                <p>Congratulations NeuPass User!! Your order is eligible for FREE Shipping!</p>

                            </div>
                            <div id='bag-product'>
                            <div className='image'>
                                <img src='https://img.tatacliq.com/images/i11/437Wx649H/MP000000017441167_437Wx649H_202305271814461.jpeg'/>
                            </div>
                            <div className='text-meedle'>
                                <p>Priyaasi Golden Floral Design Classic Bangle for</p>
                                <p>Women - Set of 2</p>
                                <span>₹549.00₹2645.00<b>₹2096.00 Off</b></span>
                                <p>Size: 2-6</p>
                            </div>
                            <div className='delivary'>
                                <img src='https://www.tatacliq.com/src/general/components/img/deliveryIcon.svg'/>
                                <span>Delivery by <p>13th JulFREE</p></span>
                            </div>
                         </div>

                         <div className='save-wishlist'>
                            <div className='qulity'>
                                <p>Qunintiny 1</p>
                            </div>
                            <div className='only'><p>Only 7 left</p></div>
                            <div className='wishlist'>
                                <img src='https://www.tatacliq.com/src/general/components/img/WL1.svg'/>
                                
                                <p>Save to Wishlist</p></div>
                            <div className='remove'><p>Remove</p></div>

                         </div>
                          <div id='bag-product'>
                            <div className='image'>
                                <img src='https://img.tatacliq.com/images/i7/437Wx649H/MP000000008102186_437Wx649H_202011032201481.jpeg'/>
                            </div>
                            <div className='text-meedle'>
                                <p>Priyaasi Golden Floral Design Classic Bangle for</p>
                                <p>Women - Set of 2</p>
                                <span>₹549.00₹2645.00<b>₹2096.00 Off</b></span>
                                <p>Size: 2-6</p>
                            </div>
                            <div className='delivary'>
                                <img src='https://www.tatacliq.com/src/general/components/img/deliveryIcon.svg'/>
                                <span>Delivery by <p>13th JulFREE</p></span>
                            </div>
                            
                             
                          </div>

                          <div className='Countiune '><p>Countiune Shopping</p></div>
                          </div>

                          
                          <div id='right-side'>
                            <div id='coupan'>
                                <img src='https://www.tatacliq.com/src/general/components/img/coupon.png'/>
                                <b>Check for Coupan</b>
                                </div>
                                <div className='total-checkout'>
                                   <p>Bag Total</p>
                                   <span>₹6140.00</span>

                                    </div>
                                    <div className='total-checkout'>
                                   <p>Shipping Charge</p>
                                   <span style={{color: 'red'}}>Free</span>

                                    </div>
                                    <div className='total-checkout'>
                                   <p>Bag Subtotal</p>
                                   <span>₹6140.00</span>

                                    </div>
                                    <div className='total-checkout'>
                                   <p>Product Discount(s)</p>
                                   <span>-₹4228.00</span>

                                    </div>
                                    <div className='total-checkout'>
                                   <p style={{color:'green'}}>You will save ₹4228.00 on this order</p>
                                   

                                    </div>
                                    <div onClick={Checkout} id='checkout'>
                                        <div id='price'><p>Total₹ 1912</p></div>
                                        <div  id='button'><p>Checkout</p></div>
                                    </div>
                                    <div id='good-itemcs'>
                                    <i class="fa-regular fa-heart fa-xl"></i>
                            <p>You have 3 items in your Wishlist</p>
                            <span>See All</span>
                          </div>
                                    
                          </div>
                        
                         
                         

                </div>
               
                
               
    

     </div>
  )
}

export default CartPage