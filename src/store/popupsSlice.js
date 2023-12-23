import { createSlice } from '@reduxjs/toolkit';

// Начальный стейт вынесен в переменную
const initialState = {
  isOpenCallPopup: false,
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
  },
});

// Экспорт экшенов для вызова диспетчера
export const { openCallPopup } = popupSlice.actions;

export default popupSlice.reducer;
