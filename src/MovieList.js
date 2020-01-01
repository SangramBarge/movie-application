import React from 'react';
import ReactDOM from 'react-dom';   



const  MovieList = ({movies}) => {
    
     return (
       <div>
            {movies.map(movie => (<h3>{movie.name}</h3>))}
       </div>);
}

export default MovieList;
