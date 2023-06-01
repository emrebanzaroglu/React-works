import React from 'react'
import { Container, Col, Row } from 'reactstrap'

export default function Footer() {
  return (
    <footer className='bg-dark text-white'>
        <Container>
            <Row>
                <Col>
                    <p>2023 Company website</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
