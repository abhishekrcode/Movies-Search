import { ADD_MOVIES,ADD_FAVOURITES, UNFAVOURITE } from "../action";

const initialMoviesState = {
    list:[],
    favourites:[]
}

export default function movies (state=initialMoviesState,action){
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list:action.movies 
    //     }
    // }
    // return state;

    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list:action.movies
            }

        case ADD_FAVOURITES:
            return{
                ...state,
                favourites:[action.movie,...state.favourites]
            }
            
        case UNFAVOURITE:
            const FilteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );

            return {
                ...state,
                favourites:FilteredArray
            }

            default:
                return state;
    }
}