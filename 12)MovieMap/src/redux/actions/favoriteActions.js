import * as actionTypes from "./actionTypes"

export function addToFavorite(favoriteItem){
    return {type:actionTypes.ADD_TO_FAVORITE,payload:favoriteItem}
}

export function removeFromFavorite(movie){
    return {type:actionTypes.REMOVE_FROM_FAVORITE,payload:movie}
}
