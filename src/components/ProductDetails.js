import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa6";
import { useParams } from 'react-router'
import { Cartcontext } from '../contexts/Cartcontext';
import { products } from '../data/productdata';
export default function ProductDetails() {
  var cartcon = useContext(Cartcontext)
let addtocart = (p)=>
{
var cartItem = {name:p.title,price:p.price}

let oldcart = cartcon.cartp;
oldcart.push(cartItem)
cartcon.setcartp(oldcart)
console.log(cartcon.cartp)
}
    let params = useParams();
    var pid = params.pid;
    var product = products.find((p)=>p.id==pid)    
  return (
    <div className='row'>
        <div className='col-3 offset-1'>
        <i class="bi bi-0-square-fill"></i>
        <img src={product.thumbnail}></img>
        </div>
        <div className='col-6 offset-1'>
    <h1>{product.title}</h1>
    <p>{product.rating} <FaStar fill='blue'></FaStar> 
    | {product.reviews.length+" "}reviews</p>
    <h4> {product.price +" "}  <span className='text-danger'>
         (-{product.discountPercentage}%)</span></h4>
    <p>{product.description}</p>
<input type="button" value="Add to cart" onClick={()=>addtocart(product)}/>
        </div>
    </div>
  )
}
