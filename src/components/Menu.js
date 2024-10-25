import React from 'react'
import {Link} from "react-router-dom"
export default function Menu() {
  return (
    <div>
        <ul>
            <li><Link to="/"  >Home</Link></li>
            <li> <Link to="/"  >link</Link>
</li>
            <li>  <Link to="/cart"  >cart</Link>
</li>
            <li>  <Link to="/login"  >Login</Link>
    </li>
    <li >
      <Link to="/categories"  >categories</Link>
      </li>
        </ul>
   


</div>  )
}
