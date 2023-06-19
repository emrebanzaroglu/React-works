import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as blogActions from "../../redux/actions/blogActions";

class Categories extends Component {
  // componentDidMount() {
  //   this.props.actions.getCategories();
  // }

  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getBlogs(category.key);
  };
  render() {
    // console.log(this.props.categories);
    return (
      <ul class="list-group list-group-flush">
        {this.props.categories.map((category) => (
          <li
            class="list-group-item"
            active={
              category.category === this.props.currentCategory.source
                ? true
                : false
            }
            onClick={() => this.selectCategory(category)}
            key={category.id}
          >
            {category.category}
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoriesReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      // getCategories: bindActionCreators(
      //   categoryActions.getCategories,
      //   dispatch
      // ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getBlogs: bindActionCreators(blogActions.getBlogs, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
