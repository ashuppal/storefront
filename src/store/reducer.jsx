// First step is to create a reducer function that will handle the actions that are dispatched to the store.


const intialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics', description: 'Electronics' },
    { name: 'food', displayName: 'Food', description: 'Food' },
    { name: 'clothing', displayName: 'Clothing', description: 'Clothing' },
  ],
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ],
  activeCategory: '',
};

// The reducer function takes two parameters, the current state and the action that was dispatched to the store. The reducer function will return the new state of the application.

const reducer = (state = intialState, action) => {
  
  switch(action.type) {
    case  'Select-Category':
    return{
      ...state,
      activeCategory: action.payload,
      products: intialState.products.filter(product => product.category === action.payload),
    }
    case 'Reset':
    return intialState;

    default:
    return state;
  }
}

//action object :the type property is a string that describes the action that was performed. The payload property is a value that is used to update the state of the application.

export const selectCategory = (category) => {
  return {
    type: 'Select-Category',
    payload: category,
  }
}

export const reset = () => {
  return {
    type: 'Reset',
    payload: {},
  }
}



export default reducer;