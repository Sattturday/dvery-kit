import './Button.scss';

export const Button = ({
  size = 'medium',
  text = 'Посмотреть',
  type = 'button',
  onClick,
}) => {
  return (
    <button
      className={`button button_size_${size}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
