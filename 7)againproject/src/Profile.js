import React, { Component } from 'react'
import {Table} from 'reactstrap'

export default class Profile extends Component {
    render() {
        const { contacts } = this.props;
        var i=1;
        
        return (
            <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Şifre</th>
                <th>Select</th>
                <th>Multiple Select</th>
                <th>Text</th>
                <th>Resim</th>
              </tr>
            </thead>
            <tbody>
                {this.props.contacts.map((contact)=>(
                    <tr>
                    <th scope="row">{i++}</th>
                    <td>{contact.email}</td>
                    <td>{contact.password}</td>
                    <td>{contact.select}</td>
                    <td>{contact.selectMulti}</td>
                    <td>{contact.text}</td>
                    <td><img src={contact.file}/></td>
                  </tr>
                ))}
              
            </tbody>
          </Table>
        )
      }
    }
    