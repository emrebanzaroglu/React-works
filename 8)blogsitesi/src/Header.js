import React, { Component } from 'react'
import { Nav, NavItem, NavLink} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink>
                <Link to="/">Blogs</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
                <Link to="/addblog">Add New Blog</Link>
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    )
  }
}
