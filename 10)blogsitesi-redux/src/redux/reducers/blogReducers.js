import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function blogReducer(state = initialState.blogs, action) {
  switch (action.type) {
    case types.GET_BLOGS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}


// import * as types from "../actions/actionTypes";
// import initialState from "./initialState";

// export default function blogReducer(state = initialState.blogs, action) {
//   switch (action.type) {
//     case types.GET_BLOGS_SUCCESS:
//       return {
//         ...state,
//         blogs: [...state, ...action.payload],
//       };
//     default:
//       return state;
//   }
// }
