import React, { useContext, useEffect, useState } from 'react'
import { Cartcontext } from '../contexts/Cartcontext';

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
    setqty(qty+1)
let oldcart = cartcon.cartp;
oldcart.push(cartItem)
cartcon.setcartp(oldcart)
}

let increaseQuantity = ()=>
{
 setqty(qty+1)
let cart = cartcon.cartp;
let index = oldcart.findIndex((p)=>p.name ==props.product.title)
cart[index].qty ++;
}

let decreaseQuantity = ()=>
{
  setqty(qty-1)
let cart = cartcon.cartp;
let index = oldcart.findIndex((p)=>p.name ==props.product.title)
cart[index].qty --;
}
 var ui =<div><input type = "button" value="-" onClick={()=>decreaseQuantity()}/>
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
