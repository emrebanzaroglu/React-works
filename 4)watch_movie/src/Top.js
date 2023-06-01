import React from 'react'
import { ListGroup,ListGroupItem } from 'reactstrap';

export default function Top({lists}) {
  return (
    <div>
        <h3>En Çok İzlenenler</h3>
    <ListGroup>
        {lists.map((list,index)=>(
        <ListGroupItem key={index}>{list}</ListGroupItem>
        )
        )}
    </ListGroup>
    </div>
  )
}
