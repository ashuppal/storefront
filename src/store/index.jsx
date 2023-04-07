// import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
import productsReducer from './products';
// import categoryReducer from './categories';
import cartReducer from './cart';
// import thunk from './middleware/thunk';
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories';

const store = () => configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  }
});

export default store();