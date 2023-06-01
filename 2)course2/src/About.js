import React from 'react'
import { Card, CardBody, CardText } from 'reactstrap'

export default function About({content}) {
  return (
    <Card>
        <CardBody>
            <CardText>{content}</CardText>
        </CardBody>
    </Card>
  )
}
