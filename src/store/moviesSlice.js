// moviesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    list: [],
  },
  reducers: {
    setMovies: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
