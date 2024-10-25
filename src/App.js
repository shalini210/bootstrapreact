import logo from './logo.svg';
import './App.css';
import Categories from './components/Categories';
import "bootstrap/dist/css/bootstrap.min.css";

import "jquery/dist/jquery.slim"
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.min.js"
import Smallproducts from './components/Smallproducts';
import Defaultcomponent from './components/Defaultcomponent';
import {Route}  from "react-router"
import {Routes} from "react-router"
import Menu from './components/Menu';
import Login from './components/Login';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Teams from './components/Teams';
import Showproducts from './components/Showproducts';
function App() {
  return (
    <>
  {/* <Menu></Menu> */}
    <Routes>
      <Route path='/teams' element={<Teams></Teams>}></Route>
      <Route path="/portfolio" element={<Profile></Profile>}></Route>
      <Route path="/categories" element={<Categories></Categories>    }></Route>
      <Route path="/smallproducts" element={<Smallproducts></Smallproducts>}></Route>
      <Route path="/" element={<Categories></Categories>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/showproducts/:category' element={<Showproducts></Showproducts>}></Route>
    </Routes>
    <div>    
      
    this is from app 
    </div>
    </>
  );
}

export default App;