import reducer from "./reducer";
import { legacy_createStore as createStore, combineReducers } from 'redux';

import { selectCategory, reset} from "./reducer";

describe('Products Reducer', () => {
  const reducers = combineReducers({
    products: reducer,
  });

  const store = createStore(reducers);

  it('should set the initial state', () => {
    const state = store.getState();
    expect(state.products.categories.length).toBe(3);
    expect(state.products.products.length).toBe(7);
    expect(state.products.activeCategory).toBe('');
  },

  it('should change the active category', () => {
    store.dispatch(selectCategory('electronics'));
    const state = store.getState();
    expect(state.products.activeCategory).toBe('electronics');
    expect(state.products.products.length).toBe(2);
  }
  ),

  it('should reset the state', () => {
    store.dispatch(selectCategory('electronics'));
    store.dispatch(reset());
    const state = store.getState();
    expect(state.products.activeCategory).toBe('');
    expect(state.products.products.length).toBe(7);
  }
  )
  )
});

