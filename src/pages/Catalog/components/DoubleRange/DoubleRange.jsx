import ReactSlider from 'react-slider';
import { useDispatch, useSelector } from 'react-redux';

import { setPriceFilter } from '../../../../store/filterSlice';

import './DoubleRange.scss';

export const DoubleRange = () => {
  const dispatch = useDispatch();
  const { price } = useSelector((state) => state.filter);

  const handleSliderChange = (values) => {
    dispatch(setPriceFilter({ min: values[0], max: values[1] }));
  };

  const handleInputChange = (field, event) => {
    const value = parseInt(event.target.value, 10) || 0;

    if (field === 'min' && value > price.max) {
      dispatch(setPriceFilter({ min: price.max }));
    } else {
      dispatch(setPriceFilter({ [field]: value }));
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
          max={100000}
          step={100}
          value={price.min}
          onChange={(e) => handleInputChange('min', e)}
        />
      </label>
      <label className='range__label'>
        <p>До</p>
        <input
          className='range__input'
          type='number'
          min={0}
          step={100}
          value={price.max}
          inputMode='numeric'
          onChange={(e) => handleInputChange('max', e)}
        />
      </label>
      <ReactSlider
        className='horizontal-slider'
        thumbClassName='example-thumb'
        trackClassName='example-track'
        min={0}
        max={100000}
        step={100}
        value={[price.min, price.max]}
        withBars={true}
        onChange={handleSliderChange}
      />
    </div>
  );
};
