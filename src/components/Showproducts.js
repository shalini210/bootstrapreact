import React, { useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Cartcontext } from '../contexts/Cartcontext'
import { products } from '../data/productdata'
import Addtocart from './Addtocart'
import Categories from './Categories'
import Counter from './Counter'
export default function Showproducts() {

    var params = useParams()
    var category = params.category
    var products_filtered = (products.filter((p)=>p.category==category))
    var productsui=products_filtered.map((p)=>
    {
    return <div className='col-3'>
            <img src={p.thumbnail}/>
            <div>{p.title}</div>
            <Link to={"/productDetails/"+p.id}>View Details</Link>
            <Addtocart product={p}></Addtocart>
    </div>
    })
  return (
    
    <div className='row'>
        <Categories></Categories>
{productsui}
    </div>
    
  )
}
