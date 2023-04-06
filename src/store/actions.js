import axios from 'axios';

// actions
export const set = (category) => {
  return {
    type: 'SET',
    payload: category,
  }
}

export const addProduct = (product) => {
  return {
    type: 'ADD-PRODUCT',
    payload: product
  }
}

export const removeItem = (product) => {
  return {
    type: 'REMOVE', 
    payload: product
  }
}


export const setProducts = (products) => {
  return {
    type: 'SET-PRODUCTS',
    payload: products
  }
}

export const setCategories = (products) => {
  return {
    type: 'SET-CATEGORIES',
    payload: products
  }
}

export const updateProduct = (product) => {
  return {
    type: 'UPDATE-PRODUCTS',
    payload: product
  }
}

export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  dispatch(setProducts(response.data.results));
}

export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  dispatch(setCategories(response.data.results));
}

export const adjustInventory = (product) => async (dispatch, getState) => {
  product.inStock--;
  let response = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);
  dispatch(updateProduct(response.data));
}