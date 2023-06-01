import React from 'react'
import {Nav,NavItem,NavLink} from 'reactstrap'

export default function Menu({links}) {
  return (
    <div className='mb-3 w-100'>
        <Nav>
            {links.map((link,index)=>(
                <NavItem>
                <NavLink href="#"  key={index}>{link}</NavLink>
                </NavItem>
            ))}
        </Nav>
        <hr/>
      </div>
  )
}
