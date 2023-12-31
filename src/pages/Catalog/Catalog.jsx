import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import {
  setCategoryFilter,
  setCheckboxFilter,
  setRequestFilter,
  setSortFilter,
  setTypeFilter,
} from '../../store/filterSlice';
import { buildUrlParams } from '../../utils/filterUtils';

import { SearchForm } from './components/SearchForm';
import { Sort } from './components/Sort';
import './Catalog.scss';
import { FilterList } from './components/FilterList/FilterList';
import { ShowList } from './components/ShowList/ShowList';
import { useGetFilterProductsQuery } from '../../api/productsApi';

export const Catalog = () => {
  const { filter } = useSelector((state) => state, { noopCheck: 'never' });
  // Управление URL для получения данных с сервера
  const [paramsUrl, setParamsUrl] = useState('');
  const dispatch = useDispatch();

  const {
    data: ProductsData = [],
    error,
    isLoading,
  } = useGetFilterProductsQuery([paramsUrl]);

  // Обработчик изменения строки поиска
  const searchHandler = (value) => {
    dispatch(setRequestFilter(value));
  };

  // Обработка изменений фильтра сортировки
  useEffect(() => {
    updateParamsUrl(filter);
  }, [filter.ordering]);

  // Обработка изменений фильтра сортировки
  useEffect(() => {
    updateParamsUrl(filter);
  }, [filter]);

  const sortHandler = (btnId) => {
    dispatch(setSortFilter(btnId));
  };

  // Обработчик изменения флажков (checkbox)
  const checkboxHandler = (key) => {
    dispatch(setCheckboxFilter(key));
  };

  // Обработчик изменения флажков (select)
  const selectHandler = (key) => {
    dispatch(setTypeFilter(key));
  };

  // Обработчик изменения флажков (select)
  const radioHandler = (key) => {
    dispatch(setCategoryFilter(key));
  };

  // Функция для обработки отфильтрованных данных перед запросом на сервер
  function updateParamsUrl(filters) {
    const paramsUrl = buildUrlParams(filters);
    setParamsUrl(paramsUrl);
  }

  // Обработчик отправки формы с фильтрами
  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateParamsUrl(filter);
  };

  return (
    <section className='catalog-page'>
      <div className='wrapper'>
        <h1 className='catalog-page__title'>Каталог</h1>
        <div className='catalog-page__container'>
          <FilterList
            filter={filter}
            checkboxHandler={checkboxHandler}
            selectHandler={selectHandler}
            radioHandler={radioHandler}
          />
          <Sort sortHandler={sortHandler} />
          <SearchForm searchHandler={searchHandler} />
          <ShowList data={ProductsData ? ProductsData : []} />
        </div>
      </div>
    </section>
  );
};
