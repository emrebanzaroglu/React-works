import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function favoriteReducer(state=initialState.favorite,action){
    switch (action.type) {
        case actionTypes.ADD_TO_FAVORITE:
            var addedItem = state.find(c=>c.movie.id ===action.payload.movie.id);
            if(addedItem){
                var newState = state.map(favoriteItem=>{
                    if(favoriteItem.movie.id===action.payload.movie.id){
                        return Object.assign({},addedItem)
                    }
                    return favoriteItem;
                })
                return newState;
            }else{
                return [...state,{...action.payload}]
            }
        case actionTypes.REMOVE_FROM_FAVORITE:
            const newState2 = state.filter(favoriteItem=>favoriteItem.movie.id!==action.payload.id)
            return newState2;
        default:
            return state;
    }
}