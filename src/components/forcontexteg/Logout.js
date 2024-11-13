import React, { useContext } from 'react'
import { Usercontext } from '../../contexts/Usercontext'

export default function Logout() {
    const user = useContext(Usercontext)
    let logoutuser = ()=>
    {
        user.setisloginp(false)
    }
  return (
    
    <div>
        <input type="button" value = "logout" onClick={()=>logoutuser()}/>
    </div>
    
  )
}
