//second step is to create a store using the createStore function from the redux library. The createStore function takes a reducer function as a parameter. The store is created in the src/store/index.jsx file.

import { legacy_createStore as createStore, combineReducers } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from './reducer';

let reducers = combineReducers({
  products : reducer,
})


const store = () => createStore(reducers, composeWithDevTools());

export default store(); //after calling this here call it in the index.js in Provider
