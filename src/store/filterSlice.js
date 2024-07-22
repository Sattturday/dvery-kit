import { createSlice } from '@reduxjs/toolkit';

import { INITIAL_FILTER_STATE } from '../utils/filterData';
import { saveToLocalStorage } from '../utils/utils';

const initialState = INITIAL_FILTER_STATE;

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setLimitFilter(state, action) {
      state.limit = action.payload;
      saveToLocalStorage('filter', state);
    },
    setCurrentPageFilter(state, action) {
      state.currentPage = action.payload;
      saveToLocalStorage('filter', state);
    },
    setOffsetFilter(state, action) {
      state.offset = action.payload;
      saveToLocalStorage('filter', state);
    },
    setRequestFilter(state, action) {
      state.search = action.payload;
      saveToLocalStorage('filter', state);
    },
    setSortFilter(state, action) {
      state.ordering = action.payload;
      saveToLocalStorage('filter', state);
    },
    setCheckboxFilter(state, action) {
      const key = action.payload;
      state[key] = !state[key];
      saveToLocalStorage('filter', state);
    },
    setTypeFilter(state, action) {
      state.type = action.payload;
      saveToLocalStorage('filter', state);
    },
    setCategoryFilter(state, action) {
      state.category = action.payload;
      saveToLocalStorage('filter', state);
    },
    setPriceFilter(state, action) {
      const { min, max } = action.payload;

      if (min !== undefined && max !== undefined) {
        state.price.min = min;
        state.price.max = max;
      } else if (min !== undefined) {
        state.price.min = min;
      } else if (max !== undefined) {
        state.price.max = max;
      }
      saveToLocalStorage('filter', state);
    },
    setFilterDefault() {
      return initialState;
    },
    setFilterAllData(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const {
  setLimitFilter,
  setCurrentPageFilter,
  setOffsetFilter,
  setRequestFilter,
  setSortFilter,
  setTypeFilter,
  setCategoryFilter,
  setCheckboxFilter,
  setPriceFilter,
  setFilterDefault,
  setFilterAllData,
} = filterSlice.actions;

export default filterSlice.reducer;
