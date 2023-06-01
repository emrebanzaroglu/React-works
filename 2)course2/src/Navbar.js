import React from 'react'
import { Nav, NavItem, NavLink, Navbar } from 'reactstrap'

export default function CustomNavbar({links}) {
  return (
    <Navbar color='light' light expand="md">
        <Nav className='mr-auto' navbar>
            {links.map((link,index)=>(
                <NavItem key={index}>
                    <NavLink href={link.url}>{link.title}</NavLink>
                </NavItem>
            ))}
        </Nav>
    </Navbar>
  )
}
