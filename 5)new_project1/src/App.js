import React, { Component } from "react";
import Categories from "./Categories";
import Product from "./Product";
import Navbarr from "./NavBar";
import { Col, Row, Container } from "reactstrap";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: [],
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId != null) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
  };

  removeToCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
  };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Navbarr
            products={this.state.cart}
            removeToCart={this.removeToCart}
          />
          <Row>
            <Col xs="3">
              <Categories
                changeCategory={this.changeCategory}
                currentCategory={this.state.currentCategory}
              />
            </Col>
            <Col xs="9">
              <Product
                addToCart={this.addToCart}
                products={this.state.products}
                currentCategory={this.state.currentCategory}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// import React from "react";
// import { Component } from "react";
// import Categories from "./Categories";
// import Product from "./Product";
// import NavBar from "./NavBar";
// import { Col, Row, Container } from "reactstrap";

// export default class App extends Component{
//   state = {
//   currrentCategory: "",
//   products: [],
//   cart: []
// };

// changeCategory = (category) =>{
//   this.setState({currentCategory: category.categoryName});
//   this.getProducts(category.id)
// };

// getProducts = (categoryId) => {
//   let url = "http://localhost:3000/products"
//   if(categoryId){
//     url += "?categoryId="+categoryId
//   }

//   fetch(url)
//   .then((response)=>response.json())
//   .then((data)=>this.setState({products:data}))
// }


// componentDidMount() {
//   this.getProducts()
// }

// addToCart = (product) => {
//   let newCart = this.state.cart
//   var addedItem = newCart.find((c)=>c.product.id===product.id)
//   if(addedItem){
//     addedItem.quantity+=1
//   }
//   else{
//     newCart.push({product:product,quantity:1})
//     console.log(newCart)
//     }
//     this.setState({cart:newCart})
//   }

//   removeToCart = (product) => {
//     let newCart = this.state.cart.filter((c)=> c.product.id!==product.id)
//     this.setState({cart:newCart})
//   }


// render() {
//   return (
//   <div>
//     <Container>
//       <NavBar products={this.state.cart} removeToCart={this.removeToCart}/>
//       <Row>
//         <Col xs="3">
//           <p>Categories</p>
//           <Categories
//           changeCategory={this.changeCategory}
//           currentCategory={this.state.currentCategory}/>
//         </Col>
//         <Col xs="9">
//           <p>Products</p>
//           <Product
//           addToCart={this.addToCart}
//           products = {this.state.products}
//           currentCategory={this.state.currentCategory}
//           />
//         </Col>
//       </Row>
//     </Container>
//   </div>
//   );
// }
// }