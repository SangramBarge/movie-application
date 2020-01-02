import React from 'react';
import MovieList from './MovieList.js'
import { useSelector } from 'react-redux' 
const ViewMovies =()  =>{
    const latestMovie = useSelector(state => state.addMovieReducer) 
       return (
      <div className="App">
          {latestMovie.map(items =>  <li>{items.name}</li>)};
      </div>
    );
  } 
  
  export default ViewMovies;
  