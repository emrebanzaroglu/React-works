import React from 'react'
import { ListGroup,ListGroupItem } from 'reactstrap';

export default function Category({categories}) {
    return (
      <div>
        <h2>Kategoriler</h2>
        <ListGroup>
          {categories.map((category,index)=>(
            <ListGroupItem key={index}>{category}</ListGroupItem>
          )
          )}
        </ListGroup>
      </div>
      );
}