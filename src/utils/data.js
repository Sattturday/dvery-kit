import img1 from '../images/Catalog/1.jpg';
import img2 from '../images/Catalog/2.jpg';
import img3 from '../images/Catalog/3.jpg';
import img4 from '../images/Catalog/4.jpg';
import img5 from '../images/Catalog/5.png';

export const messages = {
  loadMessage: 'Идет загрузка...',
  errorMessage: 'Что-то пошло не так, попробуйте еще раз.',
  searchMessage: 'По вашему запросу ничего не найдено.',
};

export const catalogData = [
  {
    id: 'cat0',
    name: 'Входные двери',
    img: img1,
    link: '/catalog',
  },
  {
    id: 'cat1',
    name: 'Межкомнатные двери',
    img: img2,
    link: '/catalog',
  },
  {
    id: 'cat2',
    name: 'Рольставни',
    img: img3,
    link: '/catalog',
  },
  {
    id: 'cat3',
    name: 'Окна',
    img: img4,
    link: '/catalog',
  },
  {
    id: 'cat4',
    name: 'Фурнитура',
    img: img5,
    link: '/catalog',
  },
];
