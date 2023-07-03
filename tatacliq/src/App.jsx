import logo from './logo.svg';
import './App.css';

import {Route,Routes} from 'react-router-dom';
import Navbar from './Tataweb/Navbar';
import Footer from './Tataweb/Footer';
import Home from './Tataweb/Home';

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
      
        <Route exact path='/home' element={<Home/>}/>
      </Routes>

      <Footer/>

    

      
    </div>
  );
}

export default App;
