import React, { useContext, useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { useParams } from 'react-router'
import { Cartcontext } from '../contexts/Cartcontext';
import { products } from '../data/productdata';
import Categories from './Categories';
import Counter from "./Counter"

export default function Addtocart(props) {
var cartcon = useContext(Cartcontext)
const [qty,setqty]=useState(0)
let addtocart = (cartItem)=>
{
    console.log(cartItem)
    setqty(qty+1)
    console.log(qty)

let oldcart = cartcon.cartp;
oldcart.push(cartItem)
cartcon.setcartp(oldcart)
console.log(cartcon.cartp)
}
   var ui =<div><input type = "button" value="-" onClick={()=>setqty(qty-1)}/>
   {qty}
   <input type="button" value="+" onClick={()=>setqty(qty+1)}/>
   </div>
  return (
    <>
    
    <div className='row'>
       {qty==0?<input type="button" value="Add to cart"
        onClick={()=> addtocart({name:props.product.title,price:props.product.price,qty:qty+1})}/>:ui}
        </div>
    
    </>
  )
}
