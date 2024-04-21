import { createSlice } from '@reduxjs/toolkit';

import { saveToLocalStorage } from '../utils/utils';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    hitSale: [],
    catalogList: [],
  },
  reducers: {
    setHitSale(state, action) {
      state.hitSale = action.payload;
      saveToLocalStorage('hitSale', action.payload);
    },
    setCatalogList: (state, action) => {
      state.catalogList = action.payload;
      saveToLocalStorage(action.payload);
    },
  },
});

export const { setHitSale, setCatalogList } = productsSlice.actions;
export default productsSlice.reducer;
