import { createSlice } from '@reduxjs/toolkit';

// Начальный стейт вынесен в переменную
const initialState = {
  message: '',
  isOpenCallPopup: false,
  isOpenInfoPopup: false,
};

const popupSlice = createSlice({
  name: 'popups',
  initialState: initialState,
  reducers: {
    closeAllPopups(state) {
      for (const key in state) {
        state[key] = false;
      }
    },
    openCallPopup(state) {
      state.isOpenCallPopup = true;
    },
    openInfoPopup(state) {
      state.isOpenInfoPopup = true;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
  },
});

// Экспорт экшенов для вызова диспетчера
export const { closeAllPopups, openCallPopup, openInfoPopup, setMessage } =
  popupSlice.actions;

export default popupSlice.reducer;
