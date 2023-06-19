import React, { Component } from "react";
import { connect } from "react-redux";
import {  Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as movieActions from "../../redux/actions/movieActions";
import * as favoriteActions from "../../redux/actions/favoriteActions";
import alertify from "alertifyjs";


import { Link } from "react-router-dom";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardGroup,
  Col,
} from "reactstrap";

class MovieList extends Component {
  componentDidMount() {
    this.props.actions.getMovies();
  }
  addToFavorite = (movie) => {
    const  exists = this.props.favorite.some((item) => item.movie.id === movie.id )
    console.log(exists)
      if(exists){
        alertify.error(movie.movieName + " zaten favorilerde mevcut")
      }
      else{
        this.props.actions.addToFavorite({movie});
        alertify.success(movie.movieName + " favorilere eklendi")
      }
  };
  render() {
    return (
      <div>
       
        <CardGroup>
          {this.props.movies.map((movie) => (
            <Col xs="4">
              <Card 
                  className="hoverable-card"
                
                style={{ marginLeft: "10px", marginRight: "10px", marginTop: "10px", marginBottom: "10px",borderRadius: "30px" }}
                key={movie.id}>
                <iframe className="hoverable-frame" 
                  src={movie.url}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  style={{ borderRadius: "30px" }}
                  
                  allowfullscreen></iframe>
                <CardBody>
                  <CardTitle>
                    <Link to={"/savemovie/" + movie.id}></Link>
                    <div className="card bg-dark" style={{display:"inline-block",padding:"2px 15px"}}>
                      <b className="text-white"> {movie.movieName}</b>
                    </div>
                  </CardTitle>
                  <CardText>
                    <span class="material-symbols-outlined">star</span>
                    {movie.rating}
                  </CardText>
                  <hr />

                  <div>
                    <p>
                      <a
                        className="btn btn-primary"
                        data-bs-toggle="collapse"
                        href={"#" + movie.id}
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample">
                        Summary
                      </a>
                    </p>
                    <div className="collapse" id={movie.id}>
                      <div className="card card-body">{movie.movieInfo}</div>
                    </div>
                  </div>
                  <Button
                    onClick={() => this.addToFavorite(movie)} color="white"
                    className="btn btn-dark btn-outline-success text-white">
                    Add Fav to List
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </CardGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    movies: state.movieListReducer,
    favorite: state.favoriteReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getMovies: bindActionCreators(movieActions.getMovies, dispatch),
      addToFavorite: bindActionCreators(
        favoriteActions.addToFavorite,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
