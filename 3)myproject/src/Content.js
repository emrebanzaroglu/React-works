import React from 'react'
import { Table } from 'reactstrap'

export default function Content({images}) {
    var i=1;
    return (
      <Table className='table table-bordered table-striped'>
          <thead>
              <tr>
                  <th>Sıralama</th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
              </tr>
          </thead>
          <tbody>
          <tr>
          <th>Takım Logo</th>
          {images.map((image,index)=>(
                <td key={index}><img src={image} width='100px' height='100px'/></td>
          ))}
          </tr>
          </tbody>
      </Table>
    )
  }

