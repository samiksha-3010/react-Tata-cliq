import React, { useContext, useEffect, useState } from 'react'
import'./CartPage.css'
import { useNavigate } from 'react-router-dom'
import AuthContext from './context/AuthContext'
import axios from 'axios'
import toast from 'react-hot-toast'
import api from "./ApiConfig/index"


function CartPage() {
    const router = useNavigate ()
    function Checkout(){
        router('/Checkout')

        const [finalprice, setFinalPrice] = useState(0);
        const [cartProducts, setCartProducts] = useState([]);
        const { state } = useContext(AuthContext);
      
        console.log(state, "state here");
      
        useEffect(() => {
          async function getCartProduct() {
            try {
              const response = await api.post("/all-cart-products", {
                userId: state?.user?._id,
              });
              if (response.data.success) {
                setCartProducts(response.data.cartProducts);
              }
            } catch (error) {
              console.log(error, "error in cart");
            }
          }
          if (state?.user?._id) {
            getCartProduct();
          }
        }, [state]);
      
        console.log(cartProducts, "cartProducts here");
      
        const checkOut = async () => {
          const token = JSON.parse(localStorage.getItem("token"));
          console.log(token,"token here")
            if (token) {
              console.log(token,"token here")
            try {
              const response = await api.post("/checkOut", {token});
              // console.log(response.data.success,"response here");
              if (response.data.success) {
                toast.success(response.data.message);
                setCartProducts([]);
                setFinalPrice([])
              } else {
                toast.error(response.data.message);
              }
            } catch (error) {
              toast.error(error.message);
            }
          }
        };
        // }
      
        useEffect(() => {
          if (cartProducts.length) {
            var totalprice = 0;
            for (var i = 0; i < cartProducts.length; i++) {
              totalprice += cartProducts[i].price;
            }
            setFinalPrice(totalprice);
          }
        }, [cartProducts]);

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
                            {/* {userCart &&
                  userCart.map((pro) => ( */}
                            <div id='bag-product'>
                            <div className='image'>
                            {/* <img src={pro.image} alt="" /> */}
                                <img  src='https://img.tatacliq.com/images/i11/437Wx649H/MP000000017441167_437Wx649H_202305271814461.jpeg'/>
                            </div>

                            <div className='text-meedle'>
                         
                            {/* <span>₹{pro.price}.00</span> */}
                                <p>Priyaasi Golden Floral Design Classic Bangle for</p>
                                <p>Women - Set of 2</p>
                                <span>₹549.00₹2645.00<b>₹2096.00 Off</b></span>
                                <p>Size: 2-6</p>
                            </div>
                            <div className='delivary'>
                                <img src='https://www.tatacliq.com/src/general/components/img/deliveryIcon.svg'/>
                                {/* <p>{pro.name}</p>{" "} */}
                                <span>Delivery by <p>13th JulFREE</p></span>
                            </div>
                         </div>

                         <div className='save-wishlist'>
                            <div className='qulity'>
                                <p>Qunintiny 1</p>
                            </div>
                            <div className='only'><p>Only 7 left</p>

                            {/* <select >
                            <option value="">1</option>
                            <option value="">1</option>
                            <option value="">1</option>
                          </select> */}
                            </div>
                            <div className='wishlist'>
                                <img src='https://www.tatacliq.com/src/general/components/img/WL1.svg'/>
                                
                                <p>Save to Wishlist</p></div>
                            <div className='remove'><p>Remove</p></div>
                            <button onClick={() => router("/Allproduct")} id="button-0">
                  Countine Shopping
                </button>

                         </div>
                        {/* //    ))} */}
                     
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

                          <div className='Countiune '><p >Countiune Shopping</p></div>
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
                                        <div id='price'><p>Total₹ 1912</p> <br/></div>
                                        {/* <span>₹ {finalprice - 200}</span> */}
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

export default CartPage;