import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class Players extends Component {
  render() {
    const {players} = this.props
    var i=1;

    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Oyuncu Resmi</th>
            <th>Oyuncu Adı-Soyadı</th>
            <th>Gol Sayısı</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player)=>(
            <tr>
              <th scope='row'>{i++}</th>
              <td><img width='75px' height='75px' src={player.image}/></td>
              <td>{player.playerName}</td>
              <td>{player.goal}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }
}
