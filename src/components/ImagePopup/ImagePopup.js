import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BASE_URL_IMG } from '../../utils/constants';
import { closeAllPopups, setImage } from '../../store/popupsSlice';
import { Popup } from '../Popup';
import './ImagePopup.scss';

function ImagePopup() {
  const dispatch = useDispatch();
  const images = useSelector(state => state.popups.images);
  const currentSlide = useSelector(state => state.popups.currentSlide);
  const isOpen = useSelector(state => state.popups.isOpenImagePopup);

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentSlide,
    afterChange: current => dispatch(setImage(current)),
  };

  return (
    <Popup
      isOpen={isOpen}
      name="image"
      onClose={() => dispatch(closeAllPopups())}
    >
      <div className="image-popup">
        <Slider ref={sliderRef} {...settings}>
          {images?.map((item, index) => (
            <div key={index} className="image-popup__image">
              <img src={`${BASE_URL_IMG}${item.image}`} alt={item.name} />
            </div>
          ))}
        </Slider>
      </div>
    </Popup>
  );
}

export default ImagePopup;
