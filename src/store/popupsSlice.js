import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  image: {},
  isOpenCallPopup: false,
  isOpenInfoPopup: false,
  isOpenImagePopup: false,
};

const popupSlice = createSlice({
  name: 'popups',
  initialState: initialState,
  reducers: {
    closeAllPopups(state) {
      state.isOpenCallPopup = false;
      state.isOpenInfoPopup = false;
      state.isOpenImagePopup = false;
      state.image = {};
      state.message = '';
    },
    openCallPopup(state) {
      state.isOpenCallPopup = true;
    },
    openImagePopup(state) {
      state.isOpenImagePopup = true;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
    setImage(state, action) {
      state.image = action.payload;
    },
  },
});

export const {
  closeAllPopups,
  openCallPopup,
  openImagePopup,
  setMessage,
  setImage,
} = popupSlice.actions;

export default popupSlice.reducer;
