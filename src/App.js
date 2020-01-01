import React from 'react';
import MovieList from './MovieList.js'
import { useSelector, useDispatch } from 'react-redux' 
import { addMovie, deleteMovie, searchMovie }  from './actions'

function App() {
  const latestMovie = useSelector(state => state.addMovieReducer) 
  const dispatch = useDispatch(); 
     return (
    <div className="App">
      <h1>hello {latestMovie}</h1>
      <button onClick = { ()=> dispatch(addMovie())} >click</button>
    </div>
  );
} 

export default App;
