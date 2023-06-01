import React from 'react'
import { Table } from 'reactstrap'

export default function PointTable({lines}) {
    var i=1;
  return (
    <Table>
        <thead>
            <tr>
                <th>Sıralama</th>
                <th>Takım Adı</th>
                <th>Galibiyet</th>
                <th>Beraberlik</th>
                <th>Mağlubiyet</th>
                <th>Puan</th>
            </tr>
        </thead>
        <tbody>
        {lines.map((line,index)=>(
            <tr>
                <td>{i++}</td>
                <td key={index}>{line.team}</td>
                <td key={index}>{line.win}</td>
                <td key={index}>{line.draw}</td>
                <td key={index}>{line.lose}</td>
                <td key={index}>{line.point}</td>
            </tr>
        ))}
        </tbody>
    </Table>
  )
}
