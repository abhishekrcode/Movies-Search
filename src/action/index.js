import movies from "../reducer";

//action type
export const  ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES ='ADD_FAVOURITE';
export const UNFAVOURITE ='UNFAVOURITE';



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