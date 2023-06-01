import React, { Component } from 'react'
import {Table} from 'reactstrap'

export default class Products extends Component {
    render() {
        const {products} = this.props
        var i=1;
        return (
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
              </tr>
            </thead>
            <tbody>
              
                {products.map((product,index)=>
                <tr>
                    <td>{i++}</td>
                    <td key={index}>{product}</td>
                </tr>
                )}
            </tbody>
          </Table>
        );
      }
    }