import React from 'react';
import ReactDOM from 'react-dom';   

const initialState = [{name:"inception", price:"$25"}];
const addMovieReducer = (state=initialState, action) => {
    
  
    switch(action.type) {
        case  'ADD':
                return Object.assign([],state, state.concat({name: action.moviename, price:action.movieprice}));
        default:
                return initialState;
    } 
};

export default addMovieReducer;