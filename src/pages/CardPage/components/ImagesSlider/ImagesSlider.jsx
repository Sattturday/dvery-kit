import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SliderVerticalButton } from '../../../../components/SliderVerticalButton/SliderVerticalButton';
import { openImagePopup, setImage } from '../../../../store/popupsSlice';
import { BASE_URL_IMG } from '../../../../utils/constants';
import { SliderButton } from '../../../../components/SliderButton';

import './ImagesSlider.scss';

export const ImagesSlider = ({ images, sale }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderNavRef = useRef(null);
  const sliderRef = useRef(null);
  const dispatch = useDispatch();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SliderButton type='prev' />,
    nextArrow: <SliderButton type='next' />,
    afterChange: (current) => setCurrentSlide(current),
  };

  const navSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: true,
    prevArrow: <SliderVerticalButton type='prev' />,
    nextArrow: <SliderVerticalButton type='next' />,
    afterChange: (current) => setCurrentSlide(current),
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  useEffect(() => {
    goToSlide(currentSlide);
  }, [currentSlide]);

  // Обработчик открытия попапа с изображением
  const handleImagePopupOpen = () => {
    dispatch(setImage(images[currentSlide]));
    dispatch(openImagePopup());
  };

  return (
    <div className='image-slider'>
      <div className='image-slider__items'>
        {images?.length < 3 ? (
          <div className='thumbnail-slider'>
            {images?.map((item, index) => (
              <div
                key={index}
                className={`thumbnail-slider__item ${
                  index === currentSlide ? 'thumbnail-slider__item_active' : ''
                }`}
                onClick={() => {
                  setCurrentSlide(index);
                }}
              >
                <img
                  className='thumbnail-slider__image'
                  src={`${BASE_URL_IMG}${item.image}`}
                  alt={item.name}
                />
              </div>
            ))}
          </div>
        ) : (
          <Slider
            ref={sliderNavRef}
            {...navSettings}
            className='thumbnail-slider'
          >
            {images?.map((item, index) => (
              <div key={index}>
                <div
                  className={`thumbnail-slider__item ${
                    index === currentSlide
                      ? 'thumbnail-slider__item_active'
                      : ''
                  }`}
                  onClick={() => {
                    setCurrentSlide(index);
                  }}
                >
                  <img
                    className='thumbnail-slider__image'
                    src={`${BASE_URL_IMG}${item.image}`}
                    alt={item.name}
                  />
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
      <div className='image-slider__full'>
        {sale && <span className='image-slider__label'>{sale}</span>}
        <Slider ref={sliderRef} {...settings}>
          {images?.map((item, index) => (
            <div key={index} className='image-slider__image'>
              <img
                onClick={() => handleImagePopupOpen()}
                src={`${BASE_URL_IMG}${item.image}`}
                alt={item.name}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
