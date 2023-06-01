import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  CardGroup,
  Col,
} from "reactstrap";

export default class Product extends Component {
  changeCategory = (product) => {
    this.setState({
      currentProduct: product.name,
    });
  };

  render() {
    const { products } = this.props;
    return (
      <div>
        <h2>{this.props.currentCategory}</h2>

        <CardGroup>
          {products.map((product) => (
            <Col xs="3">
              <Card
                key={product.id}
                color="light"
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <CardImg
                  top
                  width="100%"
                  src={product.image}
                  alt={product.productName}
                />
                <CardBody>
                  <CardTitle>{product.productName}</CardTitle>
                  <CardText>{product.desc}</CardText>
                  <Button
                    onClick={() => this.props.addToCart(product)}
                    color="warning"
                  >
                    Buy
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