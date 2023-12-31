import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_FILTER_STATE } from '../utils/filterData';
import { saveToLocalStorage } from '../utils/utils';

const initialState = INITIAL_FILTER_STATE;

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    // Устанавливает значение текста запроса
    setRequestFilter(state, action) {
      state.search = action.payload;
      saveToLocalStorage('filter', state);
    },
    // Устанавливает фильтр сортировки
    setSortFilter(state, action) {
      state.ordering = action.payload;
    },
    // Фильтр для установки чекбокса акции
    setCheckboxFilter(state, action) {
      const key = action.payload;
      state[key] = !state[key];
    },
    // Устанавливает выбранный тип товара (select)
    setTypeFilter(state, action) {
      state.type = action.payload;
    },
    // Устанавливает выбранную категорию межкомнатной двери (radio)
    setCategoryFilter(state, action) {
      state.category = action.payload;
    },
    setPriceFilter(state, action) {
      const { min, max } = action.payload;

      if (min !== undefined && max !== undefined) {
        // Оба значения переданы, обновляем оба
        state.price.min = min;
        state.price.max = max;
      } else if (min !== undefined) {
        // Только min передан, обновляем min
        state.price.min = min;
      } else if (max !== undefined) {
        // Только max передан, обновляем max
        state.price.max = max;
      }
    },

    // Возвращает состояние фильтра к начальному состоянию
    setFilterDefault() {
      return initialState;
    },
    // Устанавливает все данные фильтра
    setFilterAllData(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const {
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
