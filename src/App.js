import React from 'react';
import MovieList from './MovieList.js'
import ViewMovies from './ViewMovies.js'
import AddMovie from './AddMovie.js'
import { useSelector, useDispatch } from 'react-redux' 
import { addMovie, deleteMovie, searchMovie }  from './actions'


function App() {
  const latestMovie = useSelector(state => state.addMovieReducer) 
  const dispatch = useDispatch(); 
     return (
    <div className="App">
      <h1>Movies - </h1>
      <ViewMovies />
      <AddMovie />
     
    </div>
  );
} 

export default App;
