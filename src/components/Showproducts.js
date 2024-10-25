import React from 'react'
import { useParams } from 'react-router'
import { products } from '../data/productdata'
export default function Showproducts() {

    var params = useParams()
    var category = params.category
    var products_filtered = (products.filter((p)=>p.category==category))
    var productsui=products_filtered.map((p)=>
    {
    return <div className='col-3'>
            <img src={p.thumbnail}/>
            <div>{p.title}</div>
    </div>})
  return (
    <div className='row'>
        <h1>{category}</h1>
{productsui}
    </div>
  )
}
