
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './Component/Header';
import Productview from './Component/Productview';
import Productlist from './Component/Productlist';
import { useState } from 'react';


function App() {
  const [cart, setCart] = useState([]);
 
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };
  return (
    <div className="App">
      <Router>
        <Header size={cart.length}/>
        <Routes>
          <Route path='/' element={<Productlist/>}/>
          <Route path='p/:id' element={<Productview handleClick={handleClick}/>}/>
        </Routes>
      </Router>
       
      
    </div>
  );
}

export default App;
