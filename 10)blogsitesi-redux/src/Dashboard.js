import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Categories from "./components/categories/Categories";
import Blogs from "./components/blogs/Blogs";
import BlogDetail from "./components/blogsDetail/BlogDetails";

import { Route, Routes } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="2">
            <Categories />
          </Col>
          <Col xs="10">
            <Routes>
              <Route path="/" element={<Blogs />}></Route>
              <Route path="/detail" element={<BlogDetail />}></Route>
            </Routes>
          </Col>
        </Row>
      </div>
    );
  }
}
