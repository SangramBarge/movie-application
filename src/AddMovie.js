import React from 'react';
import MovieList from './MovieList.js'
import {addMovie} from './actions/index.js'
import { useSelector,useDispatch, useEffect  } from 'react-redux' 
import {useState} from 'react';

  
const AddMovie =()  =>{
  
  const initialState = [{moviename:"inception", price:"$25"}];
  const [movie,setMovie] = useState(initialState);

  const latestMovie = useSelector(state => state.addMovieReducer) 
  const dispatch = useDispatch(); 
  
    const handleInputchange = (event) => {
      const {name, value} = event.target;
      setMovie({...movie, [name]:value});
      console.log(movie.moviename);
      }
      

   return (
      <div className="App">
        <input type ="text" onChange={handleInputchange} name="moviename" />
        <input type ="text" onChange={handleInputchange} name="price" />
        <button onClick= {()=> dispatch(addMovie(movie.moviename, movie.price))}>Add movie</button>
      </div>
  );
  } 
  
  export default AddMovie;
