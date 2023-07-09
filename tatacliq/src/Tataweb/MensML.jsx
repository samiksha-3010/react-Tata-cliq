import React from 'react'
import './MensMl.css'
import { useNavigate } from 'react-router-dom'


function MensML() {
  const router = useNavigate()
  function togo() {
    router('/SingleProduct')
  }
  return (


    <div id='menswenterwear-only'>
      <div id='winterwear'>
        <h2>Men's winter wear</h2>
        <p>110455 Products</p>
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
              Mens Clothing
            </div>

          </div>
          <div className='seconddiv'>
            <p>Departement</p>
            <div className='mens'>
              Casual,Wear
            </div>

          </div>
          <div className='thirddiv'>
            <h4>Product Type</h4>
            <div>
              <span></span>
              <p>Tshirt </p>
              <p>4020</p>

            </div>
            <div>
              <span  ></span>
              <p>Tshirt</p>
              <p>4009</p>
            </div>
            <div>
              <span  ></span>
              <p>SweatShirt</p>
              <p>7200</p>
            </div>
            <div>
              <span  ></span>
              <p>Jacket</p>
              <p>4070</p>
            </div>
            <div>
              <span  ></span>
              <p>Jeans</p>
              <p>7200</p>
            </div>
            <div>
              <span  ></span>
              <p>Tshirt</p>
              <p>4072</p>
            </div>
            <div>
              <span  ></span>
              <p>scirt</p>
              <p>2012</p>
            </div>
            <div>
              <span  ></span>
              <p>Blazers</p>
              <p>2023</p>
            </div>
            <div>
              <span  ></span>
              <p>shorts</p>
              <p>2023</p>
            </div>
            <div>
              <span  ></span>
              <p>Others</p>
              <p>2023</p>
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
              <p>Sleev</p>
              <p>+</p>
            </div>
            <div>
              <p>Fit</p>
              <p>+</p>
            </div>
            <div>
              <p>Fabric</p>
              <p>+</p>
            </div>
            <div>
              <p>All Discount</p>
              <p>+</p>
            </div>
            <div>
              <p>Collar</p>
              <p>+</p>
            </div>
             </div>
             </div>
        <div id='containerimg'>
          
          <div onClick={togo}>
            <img src='https://img.tatacliq.com/images/i9/437Wx649H/MP000000016236811_437Wx649H_202301261320511.jpeg' />
            <h4>pepeJeans</h4>
            <p>Pepe Jeans Green Cotton Regular Fit
              Colour Block Polo T-Shirt</p>
            <span><b>₹899MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>


            {/* <div id='star'> 3.9
              <i class="fa-regular fa-star"></i>
              {/* <p> 14Ratings &2Reviews</p> */}
             
              {/* </div> */}

              </div> 
          <div>
          <img src='https://img.tatacliq.com/images/i9/437Wx649H/MP000000016236811_437Wx649H_202301261320511.jpeg' />
            <h4>pepeJeans</h4>
            <p>Pepe Jeans Green Cotton Regular Fit
              Colour Block Polo T-Shirt</p>
            <span><b>₹899MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>
            
          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i8/437Wx649H/MP000000015584449_437Wx649H_202212060012511.jpeg'/>

            <h4> Puma</h4>
                <p>Puma Black Slim Fit Printed Cotton Crew T-Shirt</p>          
                    <span><b>₹999MRP</b>:₹1499<p>55% Off</p></span>
                    <h6>Free shipping</h6>

          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i10/437Wx649H/MP000000017210419_437Wx649H_202304141358201.jpeg'/>
            <h4> Puma</h4>
                <p>Puma Black Slim Fit Printed Cotton Crew T-Shirt</p>          
                    <span><b>₹999MRP</b>:₹999<p>55% Off</p></span>
                    <h6>Free shipping</h6>
          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i8/437Wx649H/MP000000015584449_437Wx649H_202212060012511.jpeg'/>
           <h4> United Colors of Benetton</h4>
             <p>United Colors of Benetton Black Skinny Fit Lightly Washed Jeans</p>
         <span><b>₹1574MRP</b>:₹3499<p>55% Off</p></span>
                    <h6>Free shipping</h6>
                      </div>
          <div>
          <img src='https://img.tatacliq.com/images/i9/437Wx649H/MP000000016236811_437Wx649H_202301261320511.jpeg'/>
           <h4> United Colors of Benetton</h4>
           <p>United Colors of Benetton Black Skinny Fit Lightly </p>
           <span><b>₹1574MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i9/437Wx649H/MP000000015591393_437Wx649H_202212081003572.jpeg'/>
          <h4>  Red Chief</h4>
           <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
             <span><b>₹₹2115MRP</b>:₹4699<p>50% Off</p></span>
            <h6>Free shipping</h6> </div>
          <div>
          <img src='https://img.tatacliq.com/images/i8/437Wx649H/MP000000015584438_437Wx649H_202212060012001.jpeg'/>
          <h4>  Red Chief</h4>
           <p>Red Chief Blue Slim Fit Lightly Washed Jeans</p>
             <span><b>₹₹2115MRP</b>:₹4699<p>50% Off</p></span>
            <h6>Free shipping</h6>

          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i9/437Wx649H/MP000000016361149_437Wx649H_202302032327011.jpeg'/>
           <h4> Levi's</h4>
               <p>Levi's Chilly Green Pure Cotton Slim Fit Checks Shirts</p> 
               <span><b>₹1567MRP</b>:₹2699<p>50% Off</p></span>
            <h6>Free shipping</h6>


          </div>
          <div>
          <img src='https://img.tatacliq.com/images/i11/437Wx649H/MP000000017261620_437Wx649H_202305161201101.jpeg'/>
           <h4> Levi's</h4>
               <p>Levi's Chilly Green Pure Cotton Slim Fit Checks Shirts</p> 
               <span><b>₹1567MRP</b>:₹2699<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>
          <div>
          <img src='https://img.tatacliq.com/images/i9/437Wx649H/MP000000016236811_437Wx649H_202301261320511.jpeg'/>
           <h4> Levi's</h4>
               <p>Levi's Chilly Green Pure Cotton Slim Fit Checks Shirts</p> 
               <span><b>₹1567MRP</b>:₹2699<p>50% Off</p></span>
            <h6>Free shipping</h6>

          </div>
          <div>
             <img src='https://img.tatacliq.com/images/i8/437Wx649H/MP000000015584449_437Wx649H_202212060012511.jpeg'/>
           <h4> Levi's</h4>
               <p>Levi's Chilly Green Pure Cotton Slim Fit Checks Shirts</p> 
               <span><b>₹1567MRP</b>:₹2699<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i9/437Wx649H/MP000000016362070_437Wx649H_202302040017141.jpeg'/>
           <h4> United Colors of Benetton</h4>
           <p>United Colors of Benetton Black Skinny Fit Lightly </p>
           <span><b>₹1574MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i9/437Wx649H/MP000000016236811_437Wx649H_202301261320511.jpeg'/>
          <h4> U.S. Polo Assn.</h4>
               <p>U.S. Polo Assn. Ivory Cotton Regular Fit Polo T-Shirt</p>
            <span><b>₹1899MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>
          <div>
            <img src='https://img.tatacliq.com/images/i8/437Wx649H/MP000000015584449_437Wx649H_202212060012511.jpeg'/>
           <h4> U.S. Polo Assn.</h4>
               <p>U.S. Polo Assn. Ivory Cotton Regular Fit Polo T-Shirt</p>
            <span><b>₹1899MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>

          </div>
          <div>
          <img src='https://img.tatacliq.com/images/i9/437Wx649H/MP000000016236811_437Wx649H_202301261320511.jpeg' />
            <h4>pepeJeans</h4>
            <p>Pepe Jeans Green Cotton Regular Fit
              Colour Block Polo T-Shirt</p>
            <span><b>₹899MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>
          <div>
          <img src='https://img.tatacliq.com/images/i9/437Wx649H/MP000000016179430_437Wx649H_202301221935461.jpeg'/>
           <h4> United Colors of Benetton</h4>
             <p>United Colors of Benetton Black Skinny Fit Lightly Washed Jeans</p>
         <span><b>₹1574MRP</b>:₹3499<p>55% Off</p></span>
                    <h6>Free shipping</h6>
          </div>
          <div>
          <img src='https://img.tatacliq.com/images/i8/437Wx649H/MP000000015584449_437Wx649H_202212060012511.jpeg'/>
           <h4> United Colors of Benetton</h4>
             <p>United Colors of Benetton Black Skinny Fit Lightly Washed Jeans</p>
         <span><b>₹1574MRP</b>:₹3499<p>55% Off</p></span>
                    <h6>Free shipping</h6>
          </div>
          <div>

          <img src='https://img.tatacliq.com/images/i9/437Wx649H/MP000000016236811_437Wx649H_202301261320511.jpeg' />
            <h4>pepeJeans</h4>
            <p>Pepe Jeans Green Cotton Regular Fit
              Colour Block Polo T-Shirt</p>
            <span><b>₹899MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>
          <div>
          <img src='https://img.tatacliq.com/images/i9/437Wx649H/MP000000016236811_437Wx649H_202301261320511.jpeg' />
            <h4>pepeJeans</h4>
            <p>Pepe Jeans Green Cotton Regular Fit
              Colour Block Polo T-Shirt</p>
            <span><b>₹899MRP</b>:₹1799<p>50% Off</p></span>
            <h6>Free shipping</h6>
          </div>


        </div>
         </div>

     </div> 
   
     




  )
}

export default MensML