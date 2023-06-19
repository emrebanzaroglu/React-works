import React, { Component } from 'react'
import {Row,Col,Container} from "reactstrap"
import CategoryList from "../categories/CategoryList"
import MovieList from "../movies/MovieList"

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Container className='container-fluid'>
                <Row>
                <Col xs="3">
                    <CategoryList/>
                </Col>
                <Col xs="9">
                    <MovieList/>
                </Col>
                    </Row>
                    </Container>
            </div>
        )
    }
}
