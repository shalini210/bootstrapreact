import React, { useContext, useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { useParams } from 'react-router'
import { Cartcontext } from '../contexts/Cartcontext';
import { products } from '../data/productdata';
import Categories from './Categories';
import Counter from "./Counter"

export default function Addtocart(props) {
var cartcon = useContext(Cartcontext)
const [qty,setqty]=useState(0)
useEffect(()=>
{
  let oldcart = cartcon.cartp;
  let index = oldcart.findIndex((p)=>p.name ==props.product.title)
  if(index>=0)
  {
    setqty(oldcart[index].qty)
  }
},[])
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
let increaseQuantity = ()=>
{
  setqty(qty+1)
  console.log("quantity is " +qty)
let oldcart = cartcon.cartp;
let index = oldcart.findIndex((p)=>p.name ==props.product.title)
oldcart[index].qty ++;
}

let decreaseQuantity = ()=>
{
  setqty(qty-1)
let oldcart = cartcon.cartp;
let index = oldcart.findIndex((p)=>p.name ==props.product.title)
oldcart[index].qty --;
}

   var ui =<div><input type = "button" value="-"
    onClick={()=>decreaseQuantity()}/>
   {qty}
   <input type="button" value="+" onClick={()=>increaseQuantity()}/>
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
