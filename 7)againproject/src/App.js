import React, { Component } from 'react'
import Navbarr from './Navbarr'
import Categories from './Categories'
import Products from './Products'
import CartDetail from './CartDetail'
import { Col, Container, Row } from 'reactstrap'
import alertify from 'alertifyjs'
import { Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import NotFound from './NotFound'
import Profile from './Profile'

export default class App extends Component {

  state = {
    currentCategory:"",
    products : [],
    cart: [],
    contacts:[]
  }




  changeCategory = (category) => {
    this.setState({currentCategory: category.categoryName})
    this.getProducts(category.id)
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products"
    if(categoryId!= null){
      url += "?categoryId="+categoryId
    }

    fetch(url)
      .then((response)=> response.json())
      .then((data)=>this.setState({products:data}))
  }

  componentDidMount() {
    this.getProducts();
  }

  addToCart = (product) => {
    let newCart = this.state.cart
    var addedItem = newCart.find((c)=>c.product.id === product.id)
    if(addedItem){
      addedItem.quantity +=1
    }
    else {
      newCart.push({product:product,quantity:1})
    }
    this.setState({cart:newCart})
    alertify.success(product.productName + " added to cart!",2)
  };
  
  removeToCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed from cart!",2)
  };

  addToProfile = (email,password,select,selectMulti,text,file) => {
    var newContact = this.state.contacts
    newContact.push({email:email,password:password,select:select,selectMulti:selectMulti,text:text,file:file})
    this.setState({contacts:newContact})
    alertify.success(this.state.email+" login successfull",2)
  }


  render() {
    return (
      <div className="App">
        <Container>
          <Navbarr 
            products={this.state.cart}
            removeToCart = {this.removeToCart}
          />
          <Row>
            <Col xs="3">
              <Categories 
                changeCategory = {this.changeCategory}
                currentCategory = {this.state.currentCategory}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route 
                  path='/' 
                  element={
                    <Products 
                    addToCart = {this.addToCart}
                    products = {this.state.products}
                  />
                }
              />
              <Route 
                  path='/cart' 
                  element={
                    <CartDetail 
                    cart = {this.state.cart}
                    removeToCart = {this.removeToCart}
                  />
                }
              />
              <Route path="/contact" 
                element={
                  <Contact 
                      addToProfile = {this.addToProfile}  />}/>
              <Route path="*" element={<NotFound/>}/>
              <Route path="/profile" 
                element={
                  <Profile 
                      contacts = {this.state.contacts}/>}/>
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
