import React, { useContext, useRef } from 'react'
import { Usercontext } from '../../contexts/Usercontext'

export default function Login() {
    let usernameref = useRef("")
    let pwdref = useRef("")
    const user = useContext(Usercontext)
    let loginuser = ()=>
    {
        if(usernameref.current.value=="admin" && pwdref.current.value=="123")
        {
        user.setisloginp(true)
        }
        else
        {
              alert("invalid user")
        }
    }
  return (    
    <div>
        <p>username: <input type="text" ref={usernameref}/></p>
        <p>pwd: <input type="text" ref={pwdref}/></p>
        <input type="button" value = "login" onClick={()=>loginuser()}/>
    </div>
    
  )
}
