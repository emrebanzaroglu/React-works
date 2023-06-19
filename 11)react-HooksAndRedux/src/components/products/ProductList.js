import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";

import alertify from "alertifyjs";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardGroup,
  Col,
} from "reactstrap";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product });
    alertify.success(product.productName + " sepete eklendi");
  };
  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Products</Badge>
          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
        </h3>
        <CardGroup>
          {this.props.products.map((product) => (
            <Col xs="4">
              <Card
                style={{ marginLeft: "10px", marginRight: "10px" }}
                key={product.id}
              >
                <CardImg
                  top
                  width="100%"
                  src={product.image}
                  alt={product.productName}
                />
                <CardBody>
                  <CardTitle>
                    <Link to={"/saveproduct/" + product.id}>
                      {product.productName}
                    </Link>
                  </CardTitle>
                  <CardText>{product.desc}</CardText>
                  <Button onClick={() => this.addToCart(product)} color="info">
                    Add
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </CardGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
