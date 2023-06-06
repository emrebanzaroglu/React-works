import { combineReducers } from "redux";
import counterReducer from "./counterReducers";

const reducers = combineReducers({
    counterReducer,
    
});

export default reducers;