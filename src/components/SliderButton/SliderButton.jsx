import './SliderButton.scss';

export const SliderButton = ({ onClick, type }) => {
  return (
    <button
      className={`custom-arrow custom-arrow_type_${type}`}
      type="button"
      onClick={onClick}
    ></button>
  );
};
