// import {combineReducers} from "redux"
import { ADD_MOVIES,ADD_FAVOURITES, UNFAVOURITE, SET_SHOW_FAVOURITES, ADD_MOVIES_TO_LIST ,ADD_SEARCH_RESULT} from "../action";

const initialMoviesState = {
    list:[],
    favourites:[],
    showFavourites:false
}

export function movies (state=initialMoviesState,action){
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

        case SET_SHOW_FAVOURITES:
             return {
                ...state,
                showFavourites:action.val
             }

        case ADD_MOVIES_TO_LIST:
            return {
                ...state,
                list:[action.movie,...state.list],
            }
        

            default:
                return state;
    }
}


const initialSearchState = {
    result:{},
    showSearchResults:false
};
export function search (state=initialSearchState,action){
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result:action.movie,
                showSearchResults:true
            }
        case ADD_MOVIES_TO_LIST:
                return {
                    ...state,
                    showSearchResults:false
                }
            default:
            return state;
        }
}

const initialRootState = {
    movies:initialMoviesState,
    search:initialSearchState
}
export default function rootReducer (state=initialRootState,action){
    return {
        movies:movies(state.movies,action),
        search:search(state.search,action)

    }
}

// export default combineReducers({
//     movies:movies,
//     search:search
// });



