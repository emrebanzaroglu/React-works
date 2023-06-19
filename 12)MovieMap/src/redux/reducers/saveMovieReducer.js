import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function saveMovieReducer(
  state = initialState.savedMovie,
  action
) {
  switch (action.type) {
    case actionTypes.UPDATE_MOVIE_SUCCESS:
      return action.payload;
    case actionTypes.CREATE_MOVIE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
