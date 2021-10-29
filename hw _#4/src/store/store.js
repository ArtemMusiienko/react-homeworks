import { createStore, applyMiddleware, compose,combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {rootReducer} from './reducers.js'
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
export const store = createStore(rootReducer,composedEnhancer)
export default store























// import React from 'react'
// import { createStore } from 'redux';
// import myComponent from '../App'


// const rootReducer = combineReducers({ films: filmsReducer, watched: watchedReducer })

// export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


// const ADD_WATCHED = 'ADD_WATCHED'
//  const REMOVE_WATCHED = 'REMOVE_WATCHED'



//  const watchedReducer = (state = [], action) => {
//      switch (action.type) {
//          case ADD_WATCHED:
//              if (state.includes(action.payload)) {
//                  return state
//              }
//              return [...state, action.payload]
//          case REMOVE_WATCHED:
//              return state.filter(id => id !== action.payload)
//          default:
//              return state
//      }
//  }

//  const filmsReducer = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_FILMS':
//             return ([...action.payload])
//         default:
//             return state
//     }
// }


 


// export default store

// const ACTION_1 = "ACTION_1";
// const ACTION_2 = "ACTION_2";
// const store = createStore(reducer);
// console.log(store);
// function reducer(state, action) {
//     switch(action.type) {
//         case ACTION_1: return { value: action.value_1 };
//         case ACTION_2: return { value: action.value_2 };
        
//         default: return state;
//     }
// }

// store.dispatch({ type: ACTION_1, value_1: "Some text 1" });
// store.dispatch({ type: ACTION_2, value_1: "Some text 2" });

