import React from 'react';
import ReactDOM from 'react-dom';   

const initialState = [{name:"inception", price:"$25"}];
const addMovieReducer = (state=initialState, action) => {

    console.log(action.payload);
    switch(action.type) {
        case  'ADD':
                let newMovieList = state;
                return Object.assign(newMovieList, [{name: action.payload.name, price:action.payload.movieprice }]);
                
        default:
                return initialState;
    } 
};

export default addMovieReducer;