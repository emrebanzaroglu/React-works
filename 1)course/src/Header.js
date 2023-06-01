import React, { Component } from 'react'
import { Navbar,Nav,NavItem, NavLink } from 'reactstrap'

export default class Header extends Component {
  render() {
    return (
      <Navbar color="light" light expand="md">
        <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href="/components">Category</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/components">Product</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/components">Contact</NavLink>
            </NavItem>
        </Nav>
    </Navbar>
    )
  }
}
