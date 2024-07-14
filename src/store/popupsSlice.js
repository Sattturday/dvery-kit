import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  image: null,
  images: [],
  currentSlide: 0,
  isOpenCallPopup: false,
  isOpenInfoPopup: false,
  isOpenImagePopup: false,
};

const popupSlice = createSlice({
  name: 'popups',
  initialState,
  reducers: {
    closeAllPopups(state) {
      state.isOpenCallPopup = false;
      state.isOpenInfoPopup = false;
      state.isOpenImagePopup = false;
      state.image = null;
      state.images = [];
      state.currentSlide = 0;
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
      state.currentSlide = action.payload;
      state.image = state.images[action.payload];
    },
    setImages(state, action) {
      state.images = action.payload;
    },
  },
});

export const {
  closeAllPopups,
  openCallPopup,
  openImagePopup,
  setMessage,
  setImage,
  setImages,
} = popupSlice.actions;

export default popupSlice.reducer;
