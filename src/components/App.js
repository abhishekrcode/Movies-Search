import React from "react";
import {data} from "../data"
import Navbar from "./Navbar"
import MovieCard from "./MovieCard";
import { addMovies } from "../action";



class App extends React.Component {

  componentDidMount(){
    const { store} = this.props;

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
    const {favourites} =this.props.store.getState();
    const index = favourites.indexOf(movie);

    if(index !== -1){
      return true;
    }
    return false;
  }


  render(){
  // const movies = this.props.store.getState();
  const { list } = this.props.store.getState();
  console.log('RENDER',this.props.store.getState());
  return (
  <div className="App">
    <Navbar />
    <div className="main">
      <div className="tabs">
        <div className="tab">Movies</div>
        <div className="tab">Favourites</div>
      </div>
      <div className="List">
          {list.map((movie,index) =>(
            <MovieCard
            key = {index}
            movie={movie}
            dispatch={this.props.store.dispatch}
            isFavourite = {this.isMovieFavourite(movie)}
              />
          ))}
      </div>
    </div> 
  
  </div>
   );
}
}

export default App;
