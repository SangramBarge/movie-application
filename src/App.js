import React, {useState} from 'react';
import MovieList from './MovieList.js'
import ViewMovies from './ViewMovies.js'
import AddMovie from './AddMovie.js'
import { useSelector, useDispatch } from 'react-redux' 
import { addMovie, deleteMovie, searchMovie, deleteUser }  from './actions'



function App() {
  const latestMovie = useSelector(state => state.addMovieReducer) 
  const initialUserData = {email:"", phonenno:""}
   const dispatch = useDispatch();
  const [val, setUserData] = useState(initialUserData);


   const handleInputChange = (event) =>{
    const {name, value} = event.target;
    setUserData({...val , [name]:value});
  }

  
  return (
    <div className="App">
      <h1>Movies - </h1>
      <ViewMovies />
      <AddMovie />
     
        <input type = "text" name="uid" onChange={handleInputChange} />
      
       <button onClick= { ()=>(dispatch(deleteUser(val.uid)))}> delete</button>

    </div>
  );
} 

export default App;
