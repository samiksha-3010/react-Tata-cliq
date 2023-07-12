import React from 'react'
import './Jewellery.css'
import { useNavigate } from 'react-router-dom'


function Jewellery() {
  const router = useNavigate()
  function togo() {
    router('/SingleProduct')
  }
  return (


    <div id='menswenterwear-only'>
      <div id='winterwear'>
        <h2>Jewellery</h2>
        <p>41267 Products</p>
      </div>
      <div id='sort'>
        <div id='popular'>
          <p>Short By :Popularty</p>
          <i class="fa-solid fa-arrow-down-short-wide"></i>
        </div>
        {/* <div id='icon2'>
        <img src='https://www.tatacliq.com/src/plp/components/img/list.svg'/>
                  </div> */}
      </div>
      <div id='maincontainer'>
        <div id='containertxt'>
          <div id='firstdiv'>
            <div> Filters</div>
            <div> Clear All</div>
          </div>
          <div className='seconddiv'>
            <p>Departement</p>
            <div className='mens'>
              Jewellery
            </div>

          </div>

         
          <div className='thirddiv'>
            <h4>Product Type</h4>
            <div>
              <span></span>
              <p>Diomand </p>
              <p>4020</p>

            </div>
            <div>
              <span  ></span>
              <p>Gold</p>
              <p>4009</p>
            </div>
            <div>
              <span  ></span>
              <p>Platinum</p>
              <p>7200</p>
            </div>
            <div>
              <span  ></span>
              <p>silver</p>
              <p>4070</p>
            </div>
            <div>
              <span  ></span>
              <p>Fashion</p>
              <p>7200</p>
            </div>
            <div>
              <span  ></span>
              <p>Semi- perious</p>
              <p>4072</p>
            </div>
        


          </div>
          <div id='fourdiv' >
            <div>
              <p>Brand</p>
              <p>+</p>
            </div>
            <div>
              <p>Size</p>
              <p>+</p>
            </div>
            <div>
              <p>Type</p>
              <p>+</p>
            </div>
            <div>
              <p>Price</p>
              <p>+</p>
            </div>
            <div>
              <p>Discount</p>
              <p>+</p>
            </div>
            <div>
              <p>Pattren</p>
              <p>+</p>
            </div>
            <div>
              <p>Platiunm</p>
              <p>+</p>
            </div>
            <div>
              <p>Silver</p>
              <p>+</p>
            </div>
            <div>
              <p>,Metal</p>
              <p>+</p>
            </div>
            <div>
              <p>StONE</p>
              <p>+</p>
            </div>
            <div>
              <p>Cellection</p>
              <p>+</p>
            </div>
            <div>
              <p>Ring Type</p>
              <p>+</p>
            </div>
            <div>
              <p>Diomand Type</p>
              <p>+</p>
            </div>
            <div>
              <p>Cut</p>
              <p>+</p>
            </div>
            <div>
              <p>Clearity</p>
              <p>+</p>
            </div>
             </div>
             </div>
        <div id='containerimg'>
          
          <div onClick={togo}>
            <img src='https://img.tatacliq.com/images/i4/252Wx374H/MP000000006737174_252Wx374H_20200319165425.jpeg' />
            <h4>Joyalukkas</h4>
            <p>Joyalukkas 22k Gold Earrings for Women
              </p>
            <span><b>₹899MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>


            {/* <div id='star'> 3.9
              <i class="fa-regular fa-star"></i>
              {/* <p> 14Ratings &2Reviews</p> */}
             
              {/* </div> */}

              </div> 
          <div>
          <img src='https://img.tatacliq.com/images/i7/252Wx374H/MP000000009262296_252Wx374H_202104072109281.jpeg' />
            <h4>Mia by Tanishq</h4>
            <p>Mia by Tanishq 18k Gold Stars Earrings for 
              </p>
            <span><b>₹899MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>
            
          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i5/252Wx374H/MP000000002491928_252Wx374H_20190927050027.jpeg'/>

            <h4>Tanishq</h4>
                <p>Mia by Tanishq 18k Gold Stars Earrings for </p>          
                    <span><b>₹999MRP</b>:₹1499<p>55% Off</p></span>
                    <h6>Free shipping</h6>

          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i8/252Wx374H/MP000000012226859_252Wx374H_202202210125591.jpeg'/>
            <h4>Tanishq </h4>
                <p>Mia by Tanishq 18k Gold Stars Earrings for</p>          
                    <span><b>₹999MRP</b>:₹999<p>55% Off</p></span>
                    <h6>Free shipping</h6>
          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i11/252Wx374H/MP000000017395540_252Wx374H_202306071953521.jpeg'/>
            <h4>Tanishq </h4>
                <p>Mia by Tanishq 18k Gold Stars Earrings for</p>
         <span><b>₹1574MRP</b>:₹3499<p>55% Off</p></span>
                    <h6>Free shipping</h6>
                      </div>
          <div>
          <img src='https://img.tatacliq.com/images/i6/252Wx374H/MP000000007792414_252Wx374H_202009232225191.jpeg'/>
          <h4>Tanishq </h4>
                <p>Mia by Tanishq 18k Gold Stars Earrings for</p>
           <span><b>₹1574MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i8/252Wx374H/MP000000014267053_252Wx374H_202208282057121.jpeg'/>
            <h4>Tanishq </h4>
                <p>Mia by Tanishq 18k Gold Stars Earrings for</p>
             <span><b>₹₹2115MRP</b>:₹4699<p>50% Off</p></span>
            <h6>Free shipping</h6> </div>
          <div>
          <img src='https://img.tatacliq.com/images/i9/252Wx374H/MP000000016395965_252Wx374H_202302060003211.jpeg'/>
          <h4>Tanishq </h4>
                <p>Mia by Tanishq 18k Gold Stars Earrings for</p>
             <span><b>₹₹2115MRP</b>:₹4699<p>50% Off</p></span>
            <h6>Free shipping</h6>

          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i9/252Wx374H/MP000000016395965_252Wx374H_202302060003211.jpeg'/>
            <h4>Tanishq </h4>
                <p>Mia by Tanishq 18k Gold Stars Earrings for</p>
               <span><b>₹1567MRP</b>:₹2699<p>50% Off</p></span>
            <h6>Free shipping</h6>


          </div>
          <div>
          <img src='https://img.tatacliq.com/images/i9/252Wx374H/MP000000016395965_252Wx374H_202302060003211.jpeg'/>
           <h4> Malabar Gold and Diamonds</h4>
               <p>LMalabar Gold and Diamonds 22k Gold Necklace for</p> 
               <span><b>₹1567MRP</b>:₹2699<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>
          <div>
          <img src='https://img.tatacliq.com/images/i3/252Wx374H/MP000000004032186_252Wx374H_20181208092710.jpeg'/>
           <h4> Malabar Gold and Diamonds</h4>
               <p>Malabar Gold and Diamonds 22k Gold Necklace for </p> 
               <span><b>₹1567MRP</b>:₹2699<p>50% Off</p></span>
            <h6>Free shipping</h6>

          </div>
          <div>
             <img src='https://img.tatacliq.com/images/i7/252Wx374H/MP000000009262304_252Wx374H_202104072109571.jpeg'/>
           <h4> Malabar Gold and Diamonds</h4>
               <p>Malabar Gold and Diamonds 22k Gold Necklace for </p> 
               <span><b>₹1567MRP</b>:₹2699<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i8/252Wx374H/MP000000013509947_252Wx374H_202206200509491.jpeg'/>
           <h4>Malabar Gold and Diamonds</h4>
           <p>Malabar Gold and Diamonds 22k Gold Necklace for  </p>
           <span><b>₹1574MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i9/252Wx374H/MP000000016395965_252Wx374H_202302060003211.jpeg'/>
          <h4> Malabar Gold and Diamonds</h4>
               <p>Malabar Gold and Diamonds 22k Gold Necklace for </p>
            <span><b>₹1899MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i8/252Wx374H/MP000000012803855_252Wx374H_202204131334351.jpeg'/>
           <h4>Malabar Gold and Diamonds.</h4>
               <p>Malabar Gold and Diamonds 22k Gold Necklace for </p>
            <span><b>₹1899MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>

          </div>
          <div>
          <img src='https://img.tatacliq.com/images/i11/252Wx374H/MP000000017395554_252Wx374H_202306072016391.jpeg' />
            <h4>Malabar Gold and Diamonds</h4>
            <p>Malabar Gold and Diamonds 22k Gold Necklace for </p>
            <span><b>₹899MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>
          <div>
          <img src='https://img.tatacliq.com/images/i8/252Wx374H/MP000000012226859_252Wx374H_202202210125591.jpeg'/>
           <h4> Malabar Gold and Diamonds</h4>
             <p>Malabar Gold and Diamonds 22k Gold Necklace for </p>
         <span><b>₹1574MRP</b>:₹3499<p>55% Off</p></span>
                    <h6>Free shipping</h6>
          </div>
          <div>
          <img src='https://img.tatacliq.com/images/i8/437Wx649H/MP000000013996824_437Wx649H_202208011631181.jpeg'/>
           <h4> United Colors of BenettonMalabar Gold and Diamonds</h4>
             <p>Malabar Gold and Diamonds 22k Gold Necklace for </p>
         <span><b>₹1574MRP</b>:₹3499<p>55% Off</p></span>
                    <h6>Free shipping</h6>
          </div>
          <div>

          <img src='https://img.tatacliq.com/images/i8/437Wx649H/MP000000013996824_437Wx649H_202208011631181.jpeg' />
            <h4>Malabar Gold and Diamonds</h4>
            <p>Malabar Gold and Diamonds 22k Gold Necklace for </p>
            <span><b>₹899MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>
          <div>
          <img src='https://img.tatacliq.com/images/i5/252Wx374H/MP000000002491928_252Wx374H_20190927050027.jpeg' />
            <h4>Malabar Gold and Diamonds</h4>
            <p>Malabar Gold and Diamonds 22k Gold Necklace for </p>
            <span><b>₹899MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>


        </div>
         </div>

     </div> 
   
     




  )
}

export default Jewellery