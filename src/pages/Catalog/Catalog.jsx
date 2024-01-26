import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  setCategoryFilter,
  setCheckboxFilter,
  setFilterAllData,
  setRequestFilter,
  setSortFilter,
  setTypeFilter,
} from '../../store/filterSlice';
import { buildUrlParams } from '../../utils/filterUtils';
import { useGetFilterProductsQuery } from '../../api/productsApi';
import { findTitleByCategory, loadFromLocalStorage } from '../../utils/utils';
import { filterOptions } from '../../utils/filterData';
import { messages } from '../../utils/data';

import { FilterList } from './components/FilterList/FilterList';
import { ShowList } from './components/ShowList/ShowList';
import { SearchForm } from './components/SearchForm';
import { Sort } from './components/Sort';
import './Catalog.scss';

export const Catalog = () => {
  const filter = useSelector((state) => state.filter);
  const [paramsUrl, setParamsUrl] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  // Для сокрытия строки поиска при скролле
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

  // Состояние для отслеживания ширины экрана
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: ProductsData = [],
    error,
    isLoading,
  } = useGetFilterProductsQuery([paramsUrl]);

  const infoMessage = isLoading
    ? messages.loadMessage
    : error
    ? messages.errorMessage
    : '';

  // Обработчик изменения строки поиска
  const searchHandler = (value) => {
    dispatch(setRequestFilter(value));
  };

  // Проверяем LS, если там есть состояния фильтров, то отправляем их в стор
  useEffect(() => {
    const storedFilter = loadFromLocalStorage('filter');
    if (storedFilter) {
      dispatch(setFilterAllData(storedFilter));
    }
  }, [dispatch]);

  // Обработка изменений фильтра сортировки
  useEffect(() => {
    updateParamsUrl(filter);
  }, [filter.ordering]);

  // Обработка изменений фильтра сортировки
  useEffect(() => {
    updateParamsUrl(filter);
  }, [filter]);

  // useEffect для отслеживания изменений размеров окна
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Для сокрытия строки поиска при скролле
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setPreviousScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Пустой массив зависимостей указывает, что этот эффект должен запускаться только один раз при монтировании компонента

  const isSearchBarHidden = useMemo(
    () => window.innerWidth < 490 && previousScrollPosition > 0,
    [previousScrollPosition]
  );

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

    if (key !== 'intrior_door') {
      dispatch(setCategoryFilter(''));
    }
  };

  // Обработчик изменения флажков (select)
  const radioHandler = (key) => {
    dispatch(setTypeFilter('interior_door'));
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

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('page_lock');
    } else {
      document.body.classList.remove('page_lock');
    }
  }, [menuOpen]);

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <section className='catalog'>
        <div
          className={`catalog__background ${
            (menuOpen && ' catalog__background_active') || ''
          }`}
          onClick={handleMenuClick}
        />
        <div className='wrapper'>
          <div className='catalog__filter-wrapper'>
            <button
              className='catalog__filter-button catalog__filter-button_back'
              type='button'
              onClick={handleClick}
              aria-label='Вернуться на главную'
            ></button>
            <h1 className='catalog__title'>Каталог</h1>
            <h1 className='catalog__title_s'>
              {findTitleByCategory(filter['type'], filterOptions)}
            </h1>
          </div>
          <p className='catalog__subtitle_s'>
            {findTitleByCategory(filter['category'], filterOptions)}
          </p>
          <div
            className={
              isSearchBarHidden
                ? 'catalog__container catalog__container_small'
                : 'catalog__container'
            }
          >
            <div
              className={`catalog__filter-menu${
                (menuOpen && ' catalog__filter-menu_active') || ''
              }`}
            >
              <div className='catalog__filter-wrapper'>
                <button
                  className='catalog__filter-button'
                  type='button'
                  onClick={handleMenuClick}
                  aria-label='Выйти из меню фильтров'
                ></button>
                <p className='catalog__filter-title'>Фильтр</p>
              </div>
              <FilterList
                filter={filter}
                checkboxHandler={checkboxHandler}
                selectHandler={selectHandler}
                radioHandler={radioHandler}
                handleSubmit={handleSubmit}
                onMenuClick={handleMenuClick}
                windowWidth={windowWidth}
              />
            </div>
            <Sort sortHandler={sortHandler} />
            <SearchForm
              searchHandler={searchHandler}
              isSearchBarHidden={isSearchBarHidden}
            />
            <button
              className='catalog__button'
              type='button'
              onClick={handleMenuClick}
              aria-label='Войти в меню фильтров'
            />
            {windowWidth > 750 && (
              <ShowList
                data={ProductsData ? ProductsData : []}
                message={infoMessage}
              />
            )}
          </div>
        </div>
      </section>
      {windowWidth <= 750 && (
        <ShowList
          data={ProductsData ? ProductsData : []}
          message={infoMessage}
        />
      )}
    </>
  );
};
