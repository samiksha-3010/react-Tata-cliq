import React from 'react'
import './Accessories.css'
import { useNavigate } from 'react-router-dom'


function Accessories() {
  const router = useNavigate()
  function AsseSingle () {
    router('/AsseSingle ')
  }
  return (


    <div id='menswenterwear-only'>
      <div id='winterwear'>
        <h2>Womens bags</h2>
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
            Accessories
            </div>

          </div>

         
          <div className='thirddiv'>
            <h4>Product Type</h4>
            <div>
              <span></span>
              <p>Womens Bage </p>
              <p>4020</p>

            </div>
            <div>
              <span  ></span>
              <p>Men,s Bags</p>
              <p>4009</p>
            </div>
            <div>
              <span  ></span>
              <p>Men,s Belt</p>
              <p>7200</p>
            </div>
            <div>
              <span  ></span>
              <p>Utility & Stationary</p>
              <p>1561</p>
            </div>
            <div>
              <span  ></span>
              <p>Fashion</p>
              <p>7200</p>
            </div>
            <div>
              <span  ></span>
              <p>Women's Hair Accessories</p>
              <p>4072</p>
            </div>
        


          </div>
          <div id='fourdiv' >
            <div>
              <p>Brand</p>
              <p>+</p>
            </div>
            <div>
              <p>Bag Type</p>
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
              <p>Price</p>
              <p>+</p>
            </div>
            <div>
              <p>Colour</p>
              <p>+</p>
            </div>
            <div>
              <p>Bag Size</p>
              <p>+</p>
            </div>
            <div>
              <p>Sutaible</p>
              <p>+</p>
            </div>
            <div>
              <p>Cellection</p>
              <p>+</p>
            </div>
            <div>
              <p> Patrren</p>
              <p>+</p>
            </div>
          
           
            <div>
              <p>Clearity</p>
              <p>+</p>
            </div>
             </div>
             </div>
        <div id='containerimg'>
          
          <div>
            <img src='https://img.tatacliq.com/images/i8/97Wx144H/MP000000014016063_97Wx144H_202208022321121.jpeg' />
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
          <img src='https://img.tatacliq.com/images/i8/97Wx144H/MP000000015361183_97Wx144H_202211210443291.jpeg' />
            <h4>Mia by Tanishq</h4>
            <p>Mia by Tanishq 18k Gold Stars Earrings for 
              </p>
            <span><b>₹899MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>
            
          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i10/97Wx144H/MP000000017141626_97Wx144H_202304091649471.jpeg'/>

            <h4>Tanishq</h4>
                <p>Mia by Tanishq 18k Gold Stars Earrings for </p>          
                    <span><b>₹999MRP</b>:₹1499<p>55% Off</p></span>
                    <h6>Free shipping</h6>

          </div>
          <div>
            <img  onClick={AsseSingle} src='https://img.tatacliq.com/images/i9/97Wx144H/MP000000016444465_97Wx144H_202302091527421.jpeg'/>
            <h4>Tanishq </h4>
                <p>Mia by Tanishq 18k Gold Stars Earrings for</p>          
                    <span><b>₹999MRP</b>:₹999<p>55% Off</p></span>
                    <h6>Free shipping</h6>
          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i9/97Wx144H/MP000000015618426_97Wx144H_202212081641051.jpeg'/>
            <h4>Tanishq </h4>
                <p>Mia by Tanishq 18k Gold Stars Earrings for</p>
         <span><b>₹1574MRP</b>:₹3499<p>55% Off</p></span>
                    <h6>Free shipping</h6>
                      </div>
          <div>
          <img src='https://img.tatacliq.com/images/i11/97Wx144H/MP000000016807939_97Wx144H_202305121954391.jpeg'/>
          <h4>Tanishq </h4>
                <p>Mia by Tanishq 18k Gold Stars Earrings for</p>
           <span><b>₹1574MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i8/97Wx144H/MP000000015359438_97Wx144H_202211210310241.jpeg'/>
            <h4>Tanishq </h4>
                <p>Mia by Tanishq 18k Gold Stars Earrings for</p>
             <span><b>₹₹2115MRP</b>:₹4699<p>50% Off</p></span>
            <h6>Free shipping</h6> </div>
          <div>
          <img src='https://img.tatacliq.com/images/i11/97Wx144H/MP000000017604631_97Wx144H_202305182002271.jpeg'/>
          <h4>Tanishq </h4>
                <p>Mia by Tanishq 18k Gold Stars Earrings for</p>
             <span><b>₹₹2115MRP</b>:₹4699<p>50% Off</p></span>
            <h6>Free shipping</h6>

          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i12/97Wx144H/MP000000018154981_97Wx144H_202306291723281.jpeg'/>
            <h4>Tanishq </h4>
                <p>Mia by Tanishq 18k Gold Stars Earrings for</p>
               <span><b>₹1567MRP</b>:₹2699<p>50% Off</p></span>
            <h6>Free shipping</h6>


          </div>
          <div>
          <img src='https://img.tatacliq.com/images/i8/97Wx144H/MP000000015359438_97Wx144H_202211210310241.jpeg'/>
           <h4> Malabar Gold and Diamonds</h4>
               <p>LMalabar Gold and Diamonds 22k Gold Necklace for</p> 
               <span><b>₹1567MRP</b>:₹2699<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>
          <div>
          <img src='https://img.tatacliq.com/images/i11/97Wx144H/MP000000017604631_97Wx144H_202305182002271.jpeg'/>
           <h4> Malabar Gold and Diamonds</h4>
               <p>Malabar Gold and Diamonds 22k Gold Necklace for </p> 
               <span><b>₹1567MRP</b>:₹2699<p>50% Off</p></span>
            <h6>Free shipping</h6>

          </div>
          <div>
             <img src='https://img.tatacliq.com/images/i10/97Wx144H/MP000000016895286_97Wx144H_202304261934061.jpeg'/>
           <h4> Malabar Gold and Diamonds</h4>
               <p>Malabar Gold and Diamonds 22k Gold Necklace for </p> 
               <span><b>₹1567MRP</b>:₹2699<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i6/97Wx144H/MP000000006514468_97Wx144H_20200213131842.jpeg'/>
           <h4>Malabar Gold and Diamonds</h4>
           <p>Malabar Gold and Diamonds 22k Gold Necklace for  </p>
           <span><b>₹1574MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i4/97Wx144H/MP000000007281744_97Wx144H_20200715130018.jpeg'/>
          <h4> Malabar Gold and Diamonds</h4>
               <p>Malabar Gold and Diamonds 22k Gold Necklace for </p>
            <span><b>₹1899MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i9/97Wx144H/MP000000016444465_97Wx144H_202302091527421.jpeg'/>
           <h4>Malabar Gold and Diamonds.</h4>
               <p>Malabar Gold and Diamonds 22k Gold Necklace for </p>
            <span><b>₹1899MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>

          </div>
          <div>
          <img src='https://img.tatacliq.com/images/i12/97Wx144H/MP000000018154981_97Wx144H_202306291723281.jpeg' />
            <h4>Malabar Gold and Diamonds</h4>
            <p>Malabar Gold and Diamonds 22k Gold Necklace for </p>
            <span><b>₹899MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>
          <div>
          <img src='https://img.tatacliq.com/images/i10/97Wx144H/MP000000016895286_97Wx144H_202304261934061.jpeg'/>
           <h4> Malabar Gold and Diamonds</h4>
             <p>Malabar Gold and Diamonds 22k Gold Necklace for </p>
         <span><b>₹1574MRP</b>:₹3499<p>55% Off</p></span>
                    <h6>Free shipping</h6>
          </div>
          <div>
          <img src='https://img.tatacliq.com/images/i8/97Wx144H/MP000000014016063_97Wx144H_202208022321121.jpeg'/>
           <h4> United Colors of BenettonMalabar Gold and Diamonds</h4>
             <p>Malabar Gold and Diamonds 22k Gold Necklace for </p>
         <span><b>₹1574MRP</b>:₹3499<p>55% Off</p></span>
                    <h6>Free shipping</h6>
          </div>
          <div>

          <img src='https://img.tatacliq.com/images/i10/97Wx144H/MP000000017141626_97Wx144H_202304091649471.jpeg' />
            <h4>Malabar Gold and Diamonds</h4>
            <p>Malabar Gold and Diamonds 22k Gold Necklace for </p>
            <span><b>₹899MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>
          <div>
          <img src='https://img.tatacliq.com/images/i8/97Wx144H/MP000000015359438_97Wx144H_202211210310241.jpeg' />
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

export default Accessories