import React from 'react'
import'./SingleProduct.css'

function SingleProduct() {
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
                            <div className='offersimage'>
                                <div className='offersimage2'>
                                    <img src='https://assets.tatacliq.com/medias/sys_master/images/27678831411230.png'/>
                                    
                                </div>
                                  

                            </div>

                        </div>

            </div>
        </div>


    </div>
    </>
  )
}

export default SingleProduct