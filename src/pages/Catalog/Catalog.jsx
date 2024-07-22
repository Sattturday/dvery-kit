import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  setCategoryFilter,
  setCheckboxFilter,
  setCurrentPageFilter,
  setFilterAllData,
  setLimitFilter,
  setOffsetFilter,
  setRequestFilter,
  setSortFilter,
  setTypeFilter,
} from '../../store/filterSlice';
import { CatalogSection } from '../../components/CatalogSection';
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
  const filter = useSelector(state => state.filter);
  const [paramsUrl, setParamsUrl] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  // Для сокрытия строки поиска при скролле
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

  // Состояние для отслеживания ширины экрана
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();

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

  const totalPages = Math.ceil(ProductsData.count / filter.limit);

  // Обработчик изменения строки поиска
  const searchHandler = value => {
    dispatch(setRequestFilter(value));
    handleResetPagination();
  };

  // Проверяем LS, если там есть состояния фильтров, то отправляем их в стор
  useEffect(() => {
    const storedFilter = loadFromLocalStorage('filter');
    if (storedFilter) {
      dispatch(setFilterAllData(storedFilter));
    }
  }, [dispatch]);

  // Определение limit
  useEffect(() => {
    if (windowWidth >= 1440) {
      dispatch(setLimitFilter(8));
    } else if (windowWidth < 1440 && windowWidth >= 1107) {
      dispatch(setLimitFilter(9));
    } else if (windowWidth < 1107 && windowWidth >= 1025) {
      dispatch(setLimitFilter(6));
    } else if (windowWidth < 1025 && windowWidth >= 998) {
      dispatch(setLimitFilter(8));
    } else if (windowWidth < 998 && windowWidth >= 766) {
      dispatch(setLimitFilter(9));
    } else if (windowWidth < 766 && windowWidth >= 751) {
      dispatch(setLimitFilter(6));
    } else if (windowWidth < 751 && windowWidth >= 630) {
      dispatch(setLimitFilter(8));
    } else if (windowWidth < 630 && windowWidth >= 468) {
      dispatch(setLimitFilter(9));
    } else {
      dispatch(setLimitFilter(6));
    }
  }, [windowWidth]);

  // Обработка изменений фильтра сортировки
  useEffect(() => {
    updateParamsUrl(filter);
  }, [filter.ordering, filter]);

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
  }, []);

  const isSearchBarHidden = useMemo(
    () => window.innerWidth < 490 && previousScrollPosition > 0,
    [previousScrollPosition],
  );

  const sortHandler = btnId => {
    dispatch(setSortFilter(btnId));
    handleResetPagination();
  };

  // Обработчик изменения флажков (checkbox)
  const checkboxHandler = key => {
    dispatch(setCheckboxFilter(key));
    handleResetPagination();
  };

  // Обработчик изменения флажков (select)
  const selectHandler = key => {
    dispatch(setCategoryFilter(''));
    dispatch(setTypeFilter(key));
    handleResetPagination();
  };

  // Обработчик изменения флажков (radio)
  const radioHandler = key => {
    dispatch(setTypeFilter('interior_door'));
    dispatch(setCategoryFilter(key));
    handleResetPagination();
  };

  // Функция для обработки отфильтрованных данных перед запросом на сервер
  function updateParamsUrl(filters) {
    const paramsUrl = buildUrlParams(filters);
    setParamsUrl(paramsUrl);
  }

  // Обработчик отправки формы с фильтрами
  const handleSubmit = evt => {
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

  const handleResetFilter = () => {
    dispatch(setTypeFilter(''));
    dispatch(setCategoryFilter(''));
    handleResetPagination();
  };

  const showCatalogList = filter.search || filter.type || filter.category;

  const handlePageChange = page => {
    dispatch(setCurrentPageFilter(page));
    dispatch(setOffsetFilter(filter.limit * (page - 1)));
  };

  const handleResetPagination = () => {
    dispatch(setCurrentPageFilter(1));
    dispatch(setOffsetFilter(0));
  };

  return (
    <>
      <section className="catalog">
        <div
          className={`catalog__background ${
            (menuOpen && ' catalog__background_active') || ''
          }`}
          onClick={handleMenuClick}
        />

        <div className="wrapper">
          <div className="catalog__filter-wrapper">
            {showCatalogList && (
              <button
                className="catalog__filter-button catalog__filter-button_back"
                type="button"
                onClick={handleResetFilter}
                aria-label="Вернуться в начало каталога"
              ></button>
            )}
            <h1 className="catalog__title" onClick={handleResetFilter}>
              Каталог
            </h1>
            <h1 className="catalog__title_s">
              {showCatalogList
                ? findTitleByCategory(filter['type'], filterOptions)
                : 'Каталог'}
            </h1>
          </div>
          <p className="catalog__subtitle_s">
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
              <div className="catalog__filter-wrapper">
                <button
                  className="catalog__filter-button"
                  type="button"
                  onClick={handleMenuClick}
                  aria-label="Выйти из меню фильтров"
                ></button>
                <p className="catalog__filter-title">Фильтр</p>
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
            {showCatalogList && (
              <button
                className="catalog__button-reset"
                type="button"
                onClick={handleResetFilter}
              >
                Каталог
              </button>
            )}
            <Sort sortHandler={sortHandler} />
            <SearchForm
              searchHandler={searchHandler}
              isSearchBarHidden={isSearchBarHidden}
            />
            <button
              className="catalog__button"
              type="button"
              onClick={handleMenuClick}
              aria-label="Войти в меню фильтров"
            />
            {windowWidth > 750 &&
              (showCatalogList ? (
                <ShowList
                  data={ProductsData.results ? ProductsData.results : []}
                  message={infoMessage}
                  currentPage={filter.currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              ) : (
                <CatalogSection type="catalog" />
              ))}
          </div>
        </div>
      </section>
      {windowWidth <= 750 &&
        (showCatalogList ? (
          <ShowList
            data={ProductsData.results ? ProductsData.results : []}
            message={infoMessage}
            currentPage={filter.currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        ) : (
          <CatalogSection type="catalog" />
        ))}
    </>
  );
};
