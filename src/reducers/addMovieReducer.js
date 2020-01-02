import React from 'react';
import ReactDOM from 'react-dom';   

const initialState = [{name:"inception",price : "$25"}, {name:"game of thrones",price : "$35"}];
const addMovieReducer = (state=initialState, action) => {

    switch(action.type) {
        case  'ADD':
            return initialState ;
        default:
            return initialState;
            console.log(initialState)
    } 
};

export default addMovieReducer;