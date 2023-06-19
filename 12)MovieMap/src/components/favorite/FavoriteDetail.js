import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as favoriteActions from "../../redux/actions/favoriteActions";
import { Button } from "reactstrap";
// import alertify from "alertifyjs"

class FavoriteDetail extends Component {
  removeFromFavorite(movie) {
    this.props.actions.removeFromFavorite(movie);
    // alertify.error(product.productName + " sepetten silindi")
  }
  render() {
    return (
      <div>
        <h3>Favorite List</h3>
        <hr />
        <div className="container">
                <div className="row">
      
            {this.props.favorite.map(favoriteItem => (
              
                  <div className="col-4">
              <div className="card">
                
                  <img className="card-img-top" src={favoriteItem.movie.image} alt="" />
             
                <div className="card-title">
                  <h5 className="card-title">{favoriteItem.movie.movieName}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{favoriteItem.movie.movieInfo}</p>
                    <b>Rating</b> <span class="material-symbols-outlined">star</span> <span>{favoriteItem.movie.rating}</span>
                    <div>
                  <Button
                    color="danger"
              onClick={() => this.removeFromFavorite(favoriteItem.movie)}
              >
                   Delete Favorite
                  </Button>
                </div>
              </div>
                </div>
                </div>
                 
            ))}
                </div>
                </div>
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
)(FavoriteDetail);
