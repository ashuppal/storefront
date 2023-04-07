import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    activeCategory: '',
  },
  reducers: {
    setCategory: (state, action) => {
      state.activeCategory = action.payload.name;
    },
    initialSetCategories: (state, action) => {
      state.categories = action.payload;
    }
  }

});

export const { setCategory, initialSetCategories } = categorySlice.actions;
export default categorySlice.reducer;

