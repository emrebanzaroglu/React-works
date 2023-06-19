import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as blogActions from "../../redux/actions/blogActions";
import { Link } from "react-router-dom";

class Blogs extends Component {
  componentDidMount() {
    this.props.actions.getBlogs();
  }
  render() {
    console.log(this.props.blogs);
    return (
      <>
        <h2>{this.props.currentCategory.category}</h2>
        {this.props.blogs.map((blog) => (
          <div class="card" style={{ width: "18rem;" }}>
            <img src={blog.image} class="card-img-top" style={{width:"1000px" }} alt="..." />
            <div class="card-body">
              <h4>{blog.name}</h4>
              <p class="card-text">{blog.description}</p>
            </div>
            <Link to="/detail">Detay</Link>
          </div>
        ))}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    blogs: state.blogReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getBlogs: bindActionCreators(blogActions.getBlogs, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
