import { Link, Route, Switch } from "react-router-dom";
import mock_data from "./MOCK_DATA.json"
import Products from './Products';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import { useState } from 'react';
import ShoppingCart from './ShoppingCart';
function NavBar()
{
    const [sum,setSum]  = useState(0);
    const calculate = ()=>
  {
    let sum_data = 0
    for(let data in shopingCart)
    {
        console.log(data);
      sum_data+=(shopingCart[data].amount *shopingCart[data].amount);
    }
    setSum(sum_data)
    alert("the total bill is "+ sum)
  }

  const [shopingCart,setShopingCart] = useState([])
  const increment =(product)=> 
  {
  
    setShopingCart(
      shopingCart.map( (x)=> x.id === product.id ? {...product, qty: x.qty+1}: x ))
  }
  const onRemove = (product)=>
  {
    setShopingCart(shopingCart.filter((x)=> x.id !==  product.id))
  }
  const decrement =(product)=> 
  {

  
    setShopingCart( shopingCart.map((x)=> x.id == product.id ?  (   (x.qty>1) ? {...product,qty: x.qty-1} : x) : x  ))
    
  }
  
  const onAdd = (product)=> 
  {
    
    const exist = shopingCart.find((x)=> x.id === product.id);
    if(exist)
    {
      
      setShopingCart(
        shopingCart.map( (x)=> x.id === product.id ? {...product, qty: x.qty+1}: x )) 
    }
     
     else
      setShopingCart([...shopingCart,{...product,qty:1}])
    
    }
    return (
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            
          <Link className="nav-link" to="/products">Products</Link>
          </li>
          <li className="nav-item">
            
          <Link className="nav-link" to="/shopingCart">Shopping Cart</Link>
          </li>
    
          
        </ul>
        <div className="form-inline ">
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={calculate} >Check Out</button>
    
        </div>
      </div>
    </nav>
    
              <div className="container">
    
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/products">
              <Products mock_data={mock_data} onAdd={onAdd} ></Products>
            </Route>
            <Route path="/shopingCart">
              {/* <ShopingCart></ShopingCart> */}
              <ShoppingCart increment={increment}  onRemove = {onRemove} decrement={decrement} shopingCart={shopingCart}></ShoppingCart>
              </Route>
            {/* <PrivateRoute path="/admin" component={Admin} /> */}
          </Switch>
        </div>
      
        </div>
      );
}
export default NavBar