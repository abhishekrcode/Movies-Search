import React from "react";
import {data} from "../data"
import Navbar from "./Navbar"
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from "../action";
import {ContextStore} from "../index"



class App extends React.Component {

  componentDidMount(){
    const { store} = this.props;
    console.log("console",this.props)
    store.subscribe( () =>{
      this.forceUpdate();
    })
  //   store.dispatch({
  //     type:'ADD_MOVIES',
  //     movies: data
  //   }); 

  // console.log("State",store.getState());

  store.dispatch(addMovies(data));
  
  }


  isMovieFavourite = (movie) =>{
    const {movies} =this.props.store.getState();
    const index = movies.favourites.indexOf(movie);

    if(index !== -1){
      return true;
    }
    return false;
  }

  onChangeTab = (val) =>{
    this.props.store.dispatch(setShowFavourites(val))
  }


  render(){
  // const movies = this.props.store.getState();
  const {movies , search} =this.props.store.getState();
  const { list ,favourites,showFavourites } = movies;
  console.log('RENDER',this.props.store.getState());

  const displayMovies = showFavourites ? favourites : list;
  return (
  <div className="App">
    <Navbar 
      // store={this.props.store}
      search ={search}
    />
    <div className="main">
      <div className="tabs">
      <div className={`tab ${showFavourites ? " " :'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
        <div className={`tab ${showFavourites ?'active-tabs' : " " }`} onClick={() => this.onChangeTab(true)}>Favourites</div>
      </div>
      <div className="List">
          {displayMovies.map((movie,index) =>(
            <MovieCard
            key = {index}
            movie={movie}
            dispatch={this.props.store.dispatch}
            isFavourite = {this.isMovieFavourite(movie)}
              />
          ))}
      </div>
      {displayMovies.length === 0 ?<div className="no-movies">No Movies To Show </div>: null }
    </div> 
  
  </div>
   );
}
}

class AppWrapper extends React.Component {
  render(){
    return (
  <ContextStore.Consumer >
      {(store)=> <App store={store}/>}
  </ContextStore.Consumer>
      
    )
  }
}

export default AppWrapper;
