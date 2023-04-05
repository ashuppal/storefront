let initialState = [];

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type){
    case 'Add':
      return [...state, payload];
    case 'Remove':
      return state.filter(product => product.name !== payload.name)
    default:
      return state;
  }
};

export default cartReducer;