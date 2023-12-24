import './Button.scss';

export const Button = ({ size = 'medium', text = 'Посмотреть' }) => {
  return <button className={`button button_size_${size}`}>{text}</button>;
};
