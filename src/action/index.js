import movies from "../reducer";

//action type
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITE";
export const UNFAVOURITE = "UNFAVOURITE";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";
export const ADD_MOVIES_TO_LIST = "ADD_MOVIES_TO_LIST";
export const ADD_SEARCH_RESULT="ADD_SEARCH_RESULT";




//action creator
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies: movies
  };
}

export function addFavourite(movie) {
  return {
    type: ADD_FAVOURITES,
    movie: movie
  };
}

export function unfavourite(movie) {
  return {
    type: UNFAVOURITE,
    movie: movie
  };
}
export function setShowFavourites(val) {
  return {
    type: SET_SHOW_FAVOURITES,
    val
  };
}

export function addMoviesToList(movie) {
  return {
    type: ADD_MOVIES_TO_LIST,
    movie
  };
}

export function handleMovieSearch(movie) {
  const url = `http://www.omdbapi.com/?t=${movie}&apikey=8f540007`;
  return function (dispatch) {
    fetch(url)
    .then((response) => response.json())
    .then((movie)  => {
      console.log("movie", movie);

        //dispatch an action
        dispatch(addMovieSearchResult(movie));

    });
  }
 
}

export function addMovieSearchResult (movie){
    return {
        type:ADD_SEARCH_RESULT,
        movie
    }
}
