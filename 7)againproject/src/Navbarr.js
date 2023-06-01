import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Navbarr extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

  render() {
    const { products } = this.props;

    return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <NavLink>
              <Link to="/">Anasayfa</Link>
            </NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/cart">Cart</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/contact">Contact</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/profile">Profile</Link>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Ürünler - <b>{products.length}</b>
                </DropdownToggle>
                <DropdownMenu right>
                    {this.props.products.map((product)=>(
                  <DropdownItem>
                    <span className="badge badge-danger" onClick={() => this.props.removeToCart(product.product)}>
                        <b className="bg-danger px-1">X</b>
                    </span>
                    <span>
                        {product.product.productName} - <b>{product.quantity}</b>
                    </span>
                  </DropdownItem>
                    ))}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
