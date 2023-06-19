import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveMovie } from "../../redux/actions/movieActions";
import MovieDetail from "./MovieDetail";

function AddOrUpdateMovie({
  movies,
  categories,
  getMovies,
  getCategories,
  saveMovie,
  history,
  ...props
}) {
  const [movie, setMovie] = useState({ ...props.movie });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setMovie({ ...props.movie });
  }, [props.movie]);  //bunu yapmazsak döngüye girip sürekli set edecek ama bu sayede durdurabiliyoruz

  function handleChange(event) {
    const { name, value } = event.target;
    setMovie((previousMovie) => ({
      ...previousMovie,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));

    validate(name, value);
  }

  function validate(name, value) {
    if (name === "movieName" && value === "") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        movieName: "Ürün ismi olmalıdır",
      }));
    } else {
      setErrors((previousErrors) => ({
        ...previousErrors,
        movieName: "",
      }));
    }
  }

  function handleSave(event) {
    event.preventDefault();
    saveMovie(movie).then(() => {
      history.push("/");
    });
  }

  return (
    <MovieDetail
      movie={movie}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}

export function getMovieById(movies, movieId) {
  let movie = movies.find((movie) => movie.id == movieId) || null;
  return movie;
}

function mapStateToProps(state, ownProps) {
  const movieId = ownProps.match.params.movieId;
  const movie =
    movieId && state.movieListReducer.length > 0
      ? getMovieById(state.movieListReducer, movieId)
      : {};
  return {
    movie,
    movies: state.movieListReducer,
    categories: state.categoryListReducer,
  };
}

const mapDispatchToProps = {
  getCategories,
  saveMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateMovie);
