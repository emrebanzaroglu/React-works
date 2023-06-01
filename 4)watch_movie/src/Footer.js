import React from 'react'
import { Container,Row,Col } from 'reactstrap' 

export default function Footer({footers}) {
  return (
    <footer className='bg-dark text-white text-center'>
        <Container>
            <Row>
                <Col>
                {footers.map((footer,index) => (
                    <p key={index}>{footer}</p>
                ))}
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
