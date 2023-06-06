import React, { Component } from 'react'
import {Card, CardImg, CardText, CardTitle,CardBody, CardGroup, Col, Row} from "reactstrap";

export default class Blogs extends Component {

    changeCategory = (blog) => {
        this.setState({
            currentBlog : blog.title
        })
    }


  render() {
    const { blogs } = this.props;

    return (
        <div>
        <h2>{this.props.currentCategory}</h2>
            <CardGroup>
                <Row>
                    {blogs.map((blog)=> (
                    <Col xs="12">
                        <Card key={blog.id} color="light" className='mb-5' style={{marginLeft: "10px", marginRight: "10px"}}>
                            <CardImg style={{width:"400px", height:"200px"}} src={blog.image} alt={blog.title} />
                            <CardBody>
                                <CardTitle><b>{blog.title}</b></CardTitle>
                                <CardText>{blog.desc}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    ))}
                </Row>
            
            </CardGroup>
        </div>
    )
  }
}
