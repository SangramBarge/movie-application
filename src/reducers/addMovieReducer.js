import React from 'react';
import ReactDOM from 'react-dom';   

const initialState = [{id:"1",name:"inception", price:"$25"}, {id:"2",name:"gabbar", price:"$25"}];
const addMovieReducer = (state=initialState, action) => {


  
    switch(action.type) {
        case  'ADD':
                return Object.assign([],state, state.concat({name: action.moviename, price:action.movieprice}));
       
        case  'DELETE': 
               
                return  Object.assign([],state.filter( state => state.name !== action.name))
           default:
                return initialState;
    } 
};

export default addMovieReducer;