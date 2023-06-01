import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";

export default class NavBar extends Component {
  render() {
    const { products } = this.props;

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Anasayfa</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Products {products.products}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  Bize Katıl
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Ürünler - <b>{products.length}</b>
                </DropdownToggle>

                <DropdownMenu right>
                  {this.props.products.map((product) => (
                    <DropdownItem>
                      <span
                        className="badge badge-danger"
                        onClick={() => this.props.removeToCart(product.product)}
                      >
                        <b>X</b>
                      </span>
                      <span>
                        {" "}
                         {product.product.productName} - <b>{product.quantity}</b>
                      </span>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem></NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}