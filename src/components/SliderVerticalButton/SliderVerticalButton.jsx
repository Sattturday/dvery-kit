import './SliderVerticalButton.scss';

export const SliderVerticalButton = ({ onClick, type }) => {
  return (
    <button
      className={`vertical-arrow vertical-arrow_type_${type}`}
      type="button"
      onClick={onClick}
    ></button>
  );
};
