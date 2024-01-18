import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactSlider from 'react-slider';

import { useGetFilterRangeQuery } from '../../../../api/productsApi';
import { setPriceFilter } from '../../../../store/filterSlice';
import { Button } from '../../../../components/Button/Button';

import './DoubleRange.scss';

export const DoubleRange = ({ handleSubmit, onMenuClick, windowWidth }) => {
  const dispatch = useDispatch();
  const { price } = useSelector((state) => state.filter);

  const { data: filterData = [], isLoading } = useGetFilterRangeQuery();

  // Локальное состояние для временного хранения значений
  const [localPrice, setLocalPrice] = useState({
    min: price.min,
    max: price.max,
  });

  // Локальное состояние для хранения значений для начальной установки
  const [maxValue, setMaxValue] = useState(100000);
  const [valueSet, setValueSet] = useState(false);

  // useEffect для установки начальных значений и обновления максимального значения после получения данных
  useEffect(() => {
    if (filterData && !isLoading && !valueSet) {
      setLocalPrice({
        min: filterData.min_price,
        max: filterData.max_price,
      });

      setMaxValue(filterData.max_price);
      setValueSet(true); // Устанавливаем флаг, чтобы больше не изменять начальные значения
    }
  }, [filterData, isLoading, valueSet]);

  const handleSliderChange = (values) => {
    setLocalPrice({ min: values[0], max: values[1] });
  };

  const handleInputChange = (field, event) => {
    const value = parseInt(event.target.value, 10) || 0;

    if (field === 'min' && value > localPrice.max) {
      setLocalPrice({ min: localPrice.max });
    } else {
      setLocalPrice({ ...localPrice, [field]: value });
    }
  };

  const handleShowButtonClick = (e) => {
    dispatch(setPriceFilter(localPrice));

    if (handleSubmit) {
      handleSubmit(e);

      if (windowWidth < 750) {
        onMenuClick();
      }
    }
  };

  return (
    <div className='range'>
      <label className='range__label'>
        <p>От</p>
        <input
          className='range__input'
          type='number'
          min={0}
          max={maxValue}
          step={100}
          value={localPrice.min || ''}
          onChange={(e) => handleInputChange('min', e)}
        />
      </label>
      <label className='range__label'>
        <p>До</p>
        <input
          className='range__input'
          type='number'
          min={0}
          max={maxValue}
          step={100}
          value={localPrice.max || ''}
          inputMode='numeric'
          onChange={(e) => handleInputChange('max', e)}
        />
      </label>
      <ReactSlider
        className='horizontal-slider'
        thumbClassName='example-thumb'
        trackClassName='example-track'
        min={0}
        max={maxValue}
        step={100}
        value={[localPrice.min, localPrice.max]}
        withBars={true}
        onChange={handleSliderChange}
      />
      <Button
        size='large'
        text='Применить'
        type='button'
        onClick={handleShowButtonClick}
      />
    </div>
  );
};
