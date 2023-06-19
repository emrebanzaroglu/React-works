import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function blogDetailReducer(state = initialState.blogsDetail, action) {
  switch (action.type) {
    case types.GET_BLOGS_DETAILS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
