import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: '',
    results: [],
  },
  reducers: {
    setSearchText(state, action) {
      state.search = action.payload;
    },
    setSearchResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { setSearchText, setSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
