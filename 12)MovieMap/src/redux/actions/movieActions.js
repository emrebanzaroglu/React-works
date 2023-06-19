import * as actionTypes from "./actionTypes";

export function getMoviesSuccess(movies) {
  return { type: actionTypes.GET_MOVIES_SUCCESS, payload: movies };
}

export function createMovieSuccess(movie) {
  return { type: actionTypes.CREATE_MOVIE_SUCCESS, payload: movie };
}

export function updateMovieSuccess(movie) {
  return { type: actionTypes.UPDATE_MOVIE_SUCCESS, payload: movie };
}

export function saveMovieApi(movie) {
  return fetch("http://localhost:3000/movies/" + (movie.id || ""), {
    method: movie.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(movie)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveMovie(movie) {
  return function(dispatch) {
    return saveMovieApi(movie)
      .then(savedMovie => {
        movie.id
          ? dispatch(updateMovieSuccess(savedMovie))
          : dispatch(createMovieSuccess(savedMovie));
      })
      .catch(error => {
        throw error;
      });
  };
}

export async function handleResponse(response){
  if(response.ok){
    return response.json()
  }

  const error = await response.text()
  throw new Error(error)
}

export function handleError(error){
  console.error("Bir hata oluştu")
  throw error;
}

export function getMovies(categoryId) {
  return function(dispatch) {
    let url = "http://localhost:3000/movies";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getMoviesSuccess(result)));
  };
}
