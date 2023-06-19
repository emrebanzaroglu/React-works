import {combineReducers} from "redux"
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"
import movieListReducer from "./movieListReducer"
import favoriteReducer from "./favoriteReducer"
import saveMovieReducer from "./saveMovieReducer"



const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    movieListReducer,
    favoriteReducer,
    saveMovieReducer
})

export default rootReducer;