const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  activeCategory: '',
};

const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type){
    case 'Select-Category':
      return {
        ...state,
        activeCategory: payload,
      }
    case 'Reset':
      return initialState;
    default:
      return state
  }
};

export default categoryReducer;