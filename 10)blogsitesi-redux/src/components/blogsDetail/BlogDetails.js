import React, { Component } from 'react'

export default class BlogDetails extends Component {
  componentDidMount() {
    this.props.actions.getBlogs();
  }
  render() {
    console.log(this.props.blogsDetail.source)
    return (
      <div>
                <h2>{this.props.blogsDetail.source}</h2>
      </div>
    )
  }
}
