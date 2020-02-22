import React from 'react';
import MovieList from './MovieList.js'
import { useSelector } from 'react-redux' 
const ViewMovies =()  =>{
    const latestMovie = useSelector(state => state.addMovieReducer) 
    console.log(latestMovie)
       return (
      <div className="App">
          {latestMovie.map(items =>  <div><li>{items.name}</li><li>{items.price}</li><li>{items.id}</li></div>)}
      </div>
    );
  } 
  
  export default ViewMovies;
  