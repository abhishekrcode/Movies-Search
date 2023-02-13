import movies from "../reducer";

//action type
export const  ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES ='ADD_FAVOURITE';
export const UNFAVOURITE ='UNFAVOURITE';
export const SET_SHOW_FAVOURITES ='SET_SHOW_FAVOURITES';



//action creator
export function addMovies (movies){
    return {
        type:ADD_MOVIES,
        movies:movies
    }
}

export function addFavourite(movie){
    return {
        type:ADD_FAVOURITES,
        movie:movie
    }
}

export function unfavourite (movie) {
    return {
        type:UNFAVOURITE,
        movie:movie
    }
}
export function setShowFavourites (val){
    return {
        type:SET_SHOW_FAVOURITES,
        val
    }
}


