import React from 'react';
import MovieList from './MovieList.js'
import { useSelector,useDispatch } from 'react-redux' 


const AddMovie =()  =>{
    const latestMovie = useSelector(state => state.addMovieReducer) 
       return (
      <div className="App">
        <input type ="text" name="moviename" />
       
     <button>Add movie</button>
      </div>
    );
  } 
  
  export default AddMovie;

  //{ ()=> dispatch(addMovie())}