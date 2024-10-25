import React from 'react'
import { products } from '../data/productdata'
export default function Smallproducts() {
    const smallproducts = products.filter((p)=>p.price<5);
    console.log(smallproducts)
  return (
    <div>Smallproducts</div>
  )
}
