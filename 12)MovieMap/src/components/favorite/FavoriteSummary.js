import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as favoriteActions from "../../redux/actions/favoriteActions";
import {Link} from "react-router-dom"
// import alertify from "alertifyjs"

class FavoriteSummary extends Component {
  removeFromFavorite(movie) {
    this.props.actions.removeFromFavorite(movie);
    // alertify.error(movie.movieName + " favoriler silindi")
  }
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Favorileriniz boş</NavLink>
      </NavItem>
    );
  }
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Favorileriniz
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.favorite.map(favoriteItem => (
            <DropdownItem key={favoriteItem.movie.id}>
              <Badge color="danger" onClick={()=>this.removeFromFavorite(favoriteItem.movie)}>-</Badge>
              {favoriteItem.movie.movieName}
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem><Link to={"/favorite"}>Favorilere git</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  render() {
    return (
      <div>
        {this.props.favorite.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromFavorite: bindActionCreators(favoriteActions.removeFromFavorite, dispatch)
    }
  };
}
function mapStateToProps(state) {
  return {
    favorite: state.favoriteReducer
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteSummary);
