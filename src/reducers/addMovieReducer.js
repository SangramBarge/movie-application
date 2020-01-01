import React from 'react';
import ReactDOM from 'react-dom';   

const addMovieReducer = (state=0, action) => {

    switch(action.type) {
        case  'ADD':
            return state +=1 ;
        default:
            return state;
            console.log(state)
    } 
};

export default addMovieReducer;