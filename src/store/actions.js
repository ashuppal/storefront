export const selectCategory = (category) => {
  return {
    type: 'Select-Category',
    payload: category,
  }
};

export const reset = () => {
  return {
    type: 'Reset',
    payload: {},
  }
}

export const addItem = (product) => {
  return {
    type: 'Add', 
    payload: product
  }
}

export const removeItem = (product) => {
  return {
    type: 'remove', 
    payload: product
  }
}