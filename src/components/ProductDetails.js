import React from 'react'
import { FaStar } from "react-icons/fa6";
import { useParams } from 'react-router'
import { products } from '../data/productdata';
export default function ProductDetails() {
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
    <p>{product.rating} <FaStar fill='blue'></FaStar> | {product.reviews.length+" "}reviews</p>
    <h4> {product.price +" "}  <span className='text-danger'> (-{product.discountPercentage}%)</span></h4>
    <p>{product.description}</p>

        </div>
    </div>
  )
}
