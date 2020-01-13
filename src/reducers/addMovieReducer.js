import React from 'react';
import ReactDOM from 'react-dom';   

const initialState = [{name:"inception", price:"$25"}];
const addMovieReducer = (state=initialState, action) => {

    console.log(action.payload)
    switch(action.type) {
        case  'ADD':
                return initialState;
        default:
                return initialState;
    } 
};

export default addMovieReducer;