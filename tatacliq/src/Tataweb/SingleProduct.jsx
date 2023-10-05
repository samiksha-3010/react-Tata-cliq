import React, { useContext, useEffect, useState } from 'react'
import'./SingleProduct.css'
import api from './ApiConfig';
import toast from 'react-hot-toast';
import AuthContext from './context/AuthContext'
import { useParams } from 'react-router-dom';


function SingleProduct() {
  const [userData, setUserData] = useState({});
  const { id } = useParams();
  const { state } = useContext(AuthContext);
  const [singleProductData, setSingleProductData] = useState({});

  useEffect(() => {
    if (id) {
        async function getSingleProductData() {
            try {
                const response = await api.post('/get-single-product-data', { productId: id })
                if (response.data.success) {
                    setSingleProductData(response.data.product)
                }
            } catch (error) {
              console.log(error);
            }
        }
        getSingleProductData()
    }
}, [id])

  // console.log(singleProductData, "singleProductData");

  async function addToCart(productId) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await api.post("/add-cart", { productId},{token});
  
      if (response.data.success) {
        toast.success("Product added successfully to cart!!");
      } else {
        toast.error("Failed to add product to cart. Please try again.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Internal server error")
    }
  }


  return (
    <>
    <div id='singleproduct'>
        <div id='leftimage'>
            <div>
                <img src='https://img.tatacliq.com/images/i11/437Wx649H/MP000000017554565_437Wx649H_202305151656271.jpeg'/></div>
            <div> <img src='https://img.tatacliq.com/images/i11/437Wx649H/MP000000017554565_437Wx649H_202305151656222.jpeg'/></div>
            <div> <img src='https://img.tatacliq.com/images/i11/437Wx649H/MP000000017554565_437Wx649H_202305151656283.jpeg'/></div>
            <div> <img src='https://img.tatacliq.com/images/i11/437Wx649H/MP000000017554565_437Wx649H_202305151656254.jpeg'/></div>
            <div> <img src='https://img.tatacliq.com/images/i11/437Wx649H/MP000000017554565_437Wx649H_202305151656235.jpeg'/></div>
            </div>
        <div id='righttext'>
            <div id='maindiv'>
                <div id='wishlest'>
                <i class="fa-regular fa-heart"></i>
                
                <p>Popular: Recently wishlisted 82 times</p>
                </div>
                <div id='wishtext'>
                <h2>Puma</h2>
                <p>puma Black Slim Fit Printed Cotton Crew T-Shirt</p>
                   <span>₹799MRP:<b>₹1599</b> <p>53% Off</p>Inclusive of all taxes</span>
                   <h4>Use MENSEOSS coupon to get 10% off on cart value 1999/- and above.</h4>
                   <div id='stars'>
                   <i class="fa-regular fa-star"></i>
                    4 
                    <div><b>1</b><p>Rating</p></div>
                      </div>
                       </div>

                    <div id='slectsize'>
                        <p>Select Size</p>
                        <p>Select Giude</p>  
                    </div>
                     <div id='sizings'>
                        <div><p>XL</p></div>
                         <div><p>X</p></div> 
                         <div><p>L</p></div>
                         <div><p>XL</p></div> 
                         <div><p>M</p></div>
                         <div><p>S</p></div>
                          </div>
                          <div id='viewsmaller'>
                     <span>Size out of stock!<b> View Similar</b></span><br/>
                      <p> Model is 6'0"/185 cms and is wearing an M size
                     100% Cotton, Machine wash</p>
                     </div>
                        <div id='avalible-offer'>
                            <h4>Available Offers</h4>
                            <div id='offersimage'>
                                <div id='offersimage2'>
                                    <img src='https://assets.tatacliq.com/medias/sys_master/images/27678831411230.png'/>
                                    </div>
                                     
                                     <div id='offfersimage2-text'>
                                     <p>10% Instant Discount on Kotak Bank Credit Cards only.</p>
                                     <span>Min Purchase: ₹2500Max Discount: ₹1000<b>more</b></span>
                                     </div>
                                   </div>

                            <div id='offersimage'>
                                <div id='offersimage2'>
                                    <img src='https://assets.tatacliq.com/medias/sys_master/images/27678831280158.png'/>
                                    </div>
                                     
                                     <div id='offfersimage2-text'>
                                     <p>15% Instant Discount on Kotak Bank Credit Cards only.</p>
                                     <span>Min Purchase: ₹2500Max Discount: ₹1000<b>more</b></span>
                                     </div>
                                   </div>

                                   <div id='offersimage'>
                                <div id='offersimage2'>
                                    <img src='https://assets.tatacliq.com/medias/sys_master/images/27678831280158.png'/>
                                    </div>
                                     
                                     <div id='offfersimage2-text'>
                                     <p>15%off on ICICI Credit Cards.</p>
                                     <span>Use Code: ICICIWEEKEND Min Purchase: ₹150<b>more</b></span>
                                     </div>
                                   </div>

                                   <div id='offersimage'>
                                <div id='offersimage2'>
                                    <img src='https://www.tatacliq.com/src/pdp/components/img/userOfferIcon.svg'/>
                                    </div>
                                     
                                     <div id='offfersimage2-text'>
                                     <p>Use Code CLIQ500 get 10% off on min. Purchase of Rs.2500 | Max discount</p>
                                     <span>Use Code: ICICINB|2000<b>more</b></span>
                                     </div>
                                     </div>
                                  </div>

                                  <div id='more-offer'>
                                  <p>See 5 More Offers</p>
                                  </div>
                                  <div id='ship-to'>
                                    <h4>Ship-To</h4>
                                    <div id='pin-code'>
                                        <p>Delhi, 110001</p>
                                        <p>Change Pincode</p>

                                    </div>

                                  </div>
                                  <div id='icon-image1'>
                                    <div id='icon-image'>

                                    
                                    <i class="fa-solid fa-truck fa-2xl" ></i>
                                    <p>Delivery by <b>14th Jul</b></p>
                                  </div>
                                  <div id='icon-imagecash'>
                                  <i class="fa-solid fa-sack-dollar fa-2xl"></i>
                                    <p>Cash on Delivery <b>| Available</b></p>
                                    </div>
                                    </div>
                                   </div>
                                    </div>
                                    </div>
                                  <div id='more-puma'>
                                    <h2>More From Puma</h2>
                                    <div id='fallow'> + Fallow Brand</div>


                                  </div>
                                  <div id='imagediv'>
                                    <div>
                                  <img src='https://img.tatacliq.com/images/i10/437Wx649H/MP000000017210419_437Wx649H_202304141358303.jpeg'/>
                                  <p>Monte Carlo Black Regular Fit Self Design Cardigan
                                      ₹2789
                                     ₹3985(30% off)</p>
                                    </div>
                                    <div>
                                    <img src='https://img.tatacliq.com/images/i11/437Wx649H/MP000000018112402_437Wx649H_202306252337291.jpeg'/>

                                    <p>Monte Carlo Black Regular Fit Self Design Cardigan
                                      ₹2789
                                     ₹3985(30% off)</p>
                                    </div>
                                    <div>
                                    <img src='https://img.tatacliq.com/images/i11/437Wx649H/MP000000018077788_437Wx649H_202306230403041.jpeg'/>

                                    <p>Monte Carlo Black Regular Fit Self Design Cardigan
                                      ₹2789
                                     ₹3985(30% off)</p>
                                    </div>
                                    <div>
                                    <img src='https://img.tatacliq.com/images/i11/437Wx649H/MP000000018077788_437Wx649H_202306230403083.jpeg'/>

                                    <p>Monte Carlo Black Regular Fit Self Design Cardigan
                                      ₹2789
                                     ₹3985(30% off)</p>
                                    </div>
                                    <div>
                                    <img src='https://img.tatacliq.com/images/i8/437Wx649H/MP000000015181541_437Wx649H_202211051605021.jpeg'/>

                                    <p>Monte Carlo Black Regular Fit Self Design Cardigan
                                      ₹2789
                                     ₹3985(30% off)</p>

                                    </div>
                                    
                                  </div>

  

    </>
  )
}

export default SingleProduct