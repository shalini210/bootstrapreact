import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { products } from '../data/productdata'
import Categories from './Categories'
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
    </div>
    })
  return (
    <div className='row'>
        <Categories></Categories>
{productsui}
    </div>
  )
}
