import React from 'react'
import './MensMl.css'

function MensML() {
  return (
    <div id='menswenterwear'>
        <div id='winterwear'>
        <h2>Men's winter wear</h2>
        <p>110455 Products</p>
        </div>
        <div id='sort'>
            <div id='popular'>
                <p>Short By :Popularty</p>
                <i class="fa-regular fa-arrow-up-wide-short"></i>
            </div>
            {/* <div id='icon2'>
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
                                Mens Clothing
                              </div>
                             
                        </div>


                    </div>
                    <div id='containerimg'>

                    </div>

                   </div>

        
    </div>
  )
}

export default MensML