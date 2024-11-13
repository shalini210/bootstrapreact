import React, { useState } from 'react'
import {Usercontext} from '../../contexts/Usercontext'
import Login from './Login'
import Logout from './Logout'

export default function Home() {
    const [islogin,setislogin] = useState(false)
  return (
    <Usercontext.Provider value={{setisloginp:setislogin}}>
        {islogin?<Logout></Logout>:<Login></Login>}
    </Usercontext.Provider>
  )
}
