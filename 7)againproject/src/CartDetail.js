import React, { Component } from 'react'
import { Table } from 'reactstrap';

export default class CartDetail extends Component {

  render() {
    var i=1;
    
    return (
        <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Kategori Id</th>
            <th>Ürün Adı</th>
            <th>Ürün Adedi</th>
            <th>Sil</th>
          </tr>
        </thead>
        <tbody>
            {this.props.cart.map((cartDetail)=>(
                <tr>
                <th scope="row">{i++}</th>
                <td>{cartDetail.product.categoryId}</td>
                <td>{cartDetail.product.productName}</td>
                <td>{cartDetail.quantity}</td>
                <td>
                    <span className="btn btn-danger">
                        <b className="text-white" onClick={() => this.props.removeToCart(cartDetail.product)}>Remove</b>
                    </span>
                </td>
              </tr>
            ))}
          
        </tbody>
      </Table>
    )
  }
}
