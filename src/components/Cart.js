import React, { useContext, useEffect, useState } from 'react'
import { Cartcontext } from '../contexts/Cartcontext'
import Categories from './Categories'

export default function Cart() {
  const [count,setcount] = useState(0)
  const [amt,setamt] = useState(0)
  var cart = useContext(Cartcontext)
  const [cartui,setcartui]= useState("");
  useEffect(()=>
  {
  let d =   (cart.cartp).map((item)=>
    {
      return <div className='row'>
<div className='col-4'>{item.name}</div>
<div className='col-4'>{item.price}</div>
<div className='col-4'></div>
      </div>
      
    })
   setcartui(d)
    console.log("use effect called")
  },[count])
  return (
  <>
  <Categories></Categories>
  <div className='row'>
    {cartui}
  </div>
  </>  
  )
}
