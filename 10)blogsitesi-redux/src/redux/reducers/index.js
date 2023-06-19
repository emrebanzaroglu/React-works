import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoriesReducer from "./categoriesReducer";
import blogReducer from "./blogReducers";
import blogDetailReducer from "./blogDetailReducer";

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoriesReducer,
  blogReducer,
  blogDetailReducer,
});

export default rootReducer;
