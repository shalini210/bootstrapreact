import React from 'react'
import { products } from '../data/productdata'
import { Link } from 'react-router-dom';
export default function Categories() {
    var categories = [];
    products.map((product)=>
    {        
        if(!categories.includes(product.category))
        {
            categories.push(product.category)
        }
    })
    var categoriesUI = categories.map((c)=>
    {
        var l = "/showproducts/"+c;
     return   <div className='col'>
           <Link to={l}> {c}</Link>
        </div>
    })
  return (
    <div className='row'>
{categoriesUI}
    </div>
  )
}
