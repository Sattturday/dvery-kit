import img1 from '../images/Catalog/1.jpg';
import img2 from '../images/Catalog/2.jpg';
import img3 from '../images/Catalog/3.jpg';
import img4 from '../images/Catalog/4.jpg';
import img5 from '../images/Catalog/5.png';

export const messages = {
  loadMessage: 'Идет загрузка...',
  errorMessage: 'Что-то пошло не так, попробуйте еще раз.',
  successMessage: 'Заявка успешно отправлена, ожидайте наш звонок.',
  searchMessage:
    'По вашему запросу ничего не найдено. Попробуйте изменить параметры поиска или ввести запрос по другому.',
};

export const catalogData = [
  {
    id: 'cat0',
    name: 'Входные двери',
    img: img1,
    type: 'entrance_door',
  },
  {
    id: 'cat1',
    name: 'Межкомнатные двери',
    img: img2,
    type: 'interior_door',
  },
  {
    id: 'cat2',
    name: 'Рольставни',
    img: img3,
    type: 'roller_shutters',
  },
  {
    id: 'cat3',
    name: 'Окна',
    img: img4,
    type: 'window',
  },
  {
    id: 'cat4',
    name: 'Фурнитура',
    img: img5,
    type: 'accessories',
  },
];
