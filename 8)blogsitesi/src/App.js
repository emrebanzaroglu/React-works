import React, { Component } from 'react'
import Categories from './Categories'
import Blogs from './Blogs'
import Header from './Header'
import AddBlog from './AddBlog'
import { Route, Routes } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

export default class App extends Component {
  
  state = {
    currentCategory:"",
    blogs : [],
    categories : []
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  getBlogs = (categoryId) => {
    let url = "http://localhost:3000/blogs"
    if(categoryId!= null){
      url += "?categoryId="+categoryId
    }

    fetch(url)
      .then((response)=> response.json())
      .then((data)=>this.setState({blogs:data}))
  }

  componentDidMount() {
    this.getBlogs();
    this.getCategories();
  }

  changeCategory = (category) => {
    this.setState({currentCategory: category.categoryName})
    this.getBlogs(category.id)
  }

  render() {
    return (
      <div className='App'>
        <Container>
          <Header/>
          <Row>
            <Col xs="3">
              <Categories 
                changeCategory = {this.changeCategory}
                currentCategory = {this.state.currentCategory}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route 
                  path='/' 
                  element={
                    <Blogs
                    blogs = {this.state.blogs}
                    />
                  }/>
                <Route
                  path='/addblog'
                  element={
                    <AddBlog
                    categories = {this.state.categories}
                    getCategories = {this.getCategories}
                    />
                  }/>
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

