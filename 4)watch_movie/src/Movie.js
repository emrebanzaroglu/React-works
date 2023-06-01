import React from 'react'
import {Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText, Container, Row, Col, Button} from 'reactstrap'

export default function Movie({movies}) {
  return (
    <div>
        {movies.map((movie,index)=>(
            <Container>
                <Row>
                    <Col md="12">
                        <Card className='d-inline'>
                            <CardImg top height="400px" src={movie.url} alt="Movie" />
                            <CardBody>
                            <CardTitle className='fw-bold' key={index}>{movie.title}</CardTitle>
                            <CardSubtitle key={index}>Gösterime Giriş Tarihi: {movie.subtitle}</CardSubtitle>
                            <CardText key={index}>{movie.text}</CardText>
                            <Button>İzle</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
        )}
    </div>
  )
}



// <Container>
// <Row>
//     <Col xs="4">
//     {movies.map((movie,index)=>
//         <Card>
//             <CardImg top width="150px" height="150px" src={movie.url} alt="Movie" />
//             <CardBody>
//             <CardTitle key={index}>{movie.title}</CardTitle>
//             <CardSubtitle key={index}>Gösterime Giriş Tarihi: {movie.subtitle}</CardSubtitle>
//             <CardText key={index}>{movie.text}</CardText>
//             <Button>İzle</Button>
//             </CardBody>
//         </Card>
//         )}
//     </Col>
// </Row>
// </Container>