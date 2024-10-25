import React from 'react'
import { Teamdata } from '../data/teamdata'
export default function Teams() {
    var TEamui = Teamdata.map((member)=>
    {
        return <div className='col-3'>
                    <img src={member.uimg} className="img-fluid rounded-circle"></img>
                    <h2>{member.name}</h2>
                    <div>{member.desig}</div>
                </div>
    })
  return (
    <div className='row'>
        {TEamui}
    </div>
  )
}
