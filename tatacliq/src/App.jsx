import logo from './logo.svg';
import './App.css';

import {Route,Router,Routes} from 'react-router-dom';
import Navbar from './Tataweb/Navbar';
import Footer from './Tataweb/Footer';
import Home from './Tataweb/Home';
import Men from './Tataweb/Men';
import Ceteg from './Tataweb/Ceteg';
import MensMl from './Tataweb/MensML';
import SingleProduct from'./Tataweb/SingleProduct';
import Profile from './Tataweb/Profile';
import CartPage from './Tataweb/CartPage';
import Women from './Tataweb/Women';
import Kids from './Tataweb/Kids';
import Kitchen from'./Tataweb/Kitchen'
import Gaudget from'./Tataweb/Gaudget';
import Beauty from'./Tataweb/Beauty';
import Jewellery from './Tataweb/Jewellery';
import Accessories from'./Tataweb/Accessories';
import AsseSingle from'./Tataweb/AsseSingle';
import JeweSingle from './Tataweb/JeweSingle';
import WomenSingle from './Tataweb/WomenSingle';
import Checkout from './Tataweb/Checkout'
import Mywishlest from './Tataweb/Mywishlest';


function App() {

  return (
    <div>
      <Navbar/>
    <Routes>
      
   
        <Route exact path='CartPage' element={<CartPage/>}/>
        <Route exact path='Profile' element={<Profile/>}/>
        <Route exact path='SingleProduct'element={<SingleProduct/>}/>
        <Route exact path='MensMl' element={<MensMl/>}/>
        <Route exact path='Ceteg' element={<Ceteg/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/Men' element={< Men/>}/>
        <Route exact path='/women' element={<Women/>}/>
        <Route exact path='kids' element={<Kids/>}/>
        <Route exact path='Kitchen' element={<Kitchen/>}/>
        <Route exact path='gaudget'element={<Gaudget/>}/>
        <Route exact path='Beauty'element={<Beauty/>}/>
        <Route exact path='Jewellery'element={< Jewellery/>}/>
        <Route exact path='Accessories'element={<Accessories/>}/>
        <Route exact path='AsseSingle' element={<AsseSingle/>}/>
        <Route exact path='JeweSingle'element={<JeweSingle/>}/>
        <Route exact path='WomenSingle' element={<WomenSingle/>}/>
        <Route exact path='Checkout' element={<Checkout/>}/>
        <Route exact path='Mywishlest' element={<Mywishlest/>}/>
        
        
      
    
       
        
      </Routes>

      <Footer/>

    

      
    </div>
  );
}

export default App;
