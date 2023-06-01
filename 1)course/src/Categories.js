import React, { Component } from 'react'
import { ListGroup,ListGroupItem } from 'reactstrap';

export default class Categories extends Component {
    render() {
        const {categorie} = this.props
        return (
          <ListGroup>
            {categorie.map((category,index)=>
            <ListGroupItem key={index}>{category}</ListGroupItem>
            )}
          </ListGroup>
        );
    }
}