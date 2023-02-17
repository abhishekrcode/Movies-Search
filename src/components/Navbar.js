import React from "react";
import {data} from '../data';
import { addMoviesToList, handleMovieSearch } from "../action";
import { ContextStore } from "../index";
class Navbar extends React.Component {
    constructor(props){
        super(props);
            this.state ={
                // showSearchResults:false,
                searchText: ''
            };
        }
       
     handleAddMovies = (movie) => {
        this.props.store.dispatch(addMoviesToList(movie));
        this.setState({
            showSearchResults:false
        })
    }

  handleSearch = () =>  {
        const {searchText} = this.state; 
        this.props.store.dispatch(handleMovieSearch(searchText));
        
    };
    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        });
    };

    render () { 
        // const {showSearchResults} = this.state;
        const {result:movie,showSearchResults} = this.props.search;
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                   
                    {showSearchResults &&
                        <div className="search-results">
                            <div className="search-results">
                                <img src={movie.Poster} alt='search-pic' />

                                <div className="movie-info">
                                 <span>{movie.Title}</span>
                                 <button onClick={() => this.handleAddMovies(movie)}>
                                    Add to Movies
                                 </button>
                                </div>
                            </div>
                        </div> 
                    }

                </div>

            </div>
        );
    }
}

class NavbarWrapper extends React.Component {
    render(){
        return (
            <ContextStore.Consumer>
                {(store) =><Navbar store ={store} search={this.props.search}/>}
            </ContextStore.Consumer>
        )
    }
}



export default NavbarWrapper;