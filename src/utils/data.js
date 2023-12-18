import img1 from '../images/Cards/Межком_Ламинат_1Г1 - миланский орех_1700.jpg';
import img2 from '../images/Cards/Входная_ДВ_10200(10890).jpg';
import img3 from '../images/Cards/Входная_ДВ(1).jpg';
import img4 from '../images/Cards/Межком_Ламинат_Камея ПГ_3190.jpg';
import img5 from '../images/Cards/Межком_Ламинат_Классика_2200.jpg';
import img6 from '../images/Cards/Межком_Ламинат_Классика ПГ_2200.jpg';

export const messages = {
  loadMessage: 'Идет загрузка...',
  errorMessage: 'Что-то пошло не так, попробуйте еще раз.',
  searchMessage: 'По вашему запросу ничего не найдено.',
};

export const cardsExamples = [
  {
    id: 3,
    type: 'interior_door',
    category: 'laminate',
    name: '1Г1 - миланский орех очень длинное интересное загадочное название',
    price: 1700,
    for_sale: false,
    price_discount: 0,
    subproduct: [],
    description:
      '<p><strong>Полотно глухое.</strong></p>\r\n\r\n<p>Цвет:&nbsp;<strong>Миланский орех.</strong></p>',
    size: [
      {
        size: '600*2000',
      },
      {
        size: '700*2000',
      },
      {
        size: '800*2000',
      },
      {
        size: '900*2000',
      },
    ],
    for_order: false,
    hit_sale: false,
    productalbum: [
      {
        image: img1,
      },
    ],
    productalbumcolor: [],
  },
  {
    id: 5,
    type: 'entrance_door',
    category: 'None',
    name: 'ДВ',
    price: 10890,
    for_sale: true,
    price_discount: 10200,
    subproduct: [],
    description:
      '<p>Подходит для установки</p>\r\n\r\n<p>в помещении и на улице</p>\r\n\r\n<p>модель&nbsp;&quot;ДВ&quot;</p>\r\n\r\n<p>' +
      'Покрытие:&nbsp;Антик медь</p>\r\n\r\n<p>t-47</p>\r\n\r\n<p>Глазок с широким углом обзора</p>\r\n\r\n<p>Замок:&nbsp;' +
      'ПРО_САМ цилиндровый</p>\r\n\r\n<p>Внутренняя отделка:&nbsp;металл</p>\r\n\r\n<p>Петли простые:&nbsp;Открывание 180 градусов</p>\r\n\r\n<p>Левые и Правые.</p>',
    size: [
      {
        size: '860/960*2050',
      },
    ],
    for_order: false,
    hit_sale: true,
    productalbum: [
      {
        image: img2,
      },
      {
        image: img3,
      },
    ],
    productalbumcolor: [],
  },
  {
    id: 2,
    type: 'interior_door',
    category: 'laminate',
    name: 'Камея ПГ',
    price: 3190,
    for_sale: false,
    price_discount: 0,
    subproduct: [],
    description:
      '<p><strong>Полотно глухое.</strong></p>\r\n\r\n<p>Цвет:&nbsp;<strong>Итальянский орех.</strong></p>',
    size: [
      {
        size: '600*2000',
      },
      {
        size: '700*2000',
      },
      {
        size: '800*2000',
      },
      {
        size: '900*2000',
      },
    ],
    for_order: false,
    hit_sale: false,
    productalbum: [
      {
        image: img4,
      },
    ],
    productalbumcolor: [],
  },
  {
    id: 4,
    type: 'interior_door',
    category: 'laminate',
    name: 'Классика',
    price: 2200,
    for_sale: false,
    price_discount: null,
    subproduct: [],
    description:
      '<p>Классика</p>\r\n\r\n<p>Грунтовая дверь под покраску, без стекла.&nbsp;</p>',
    size: [
      {
        size: '600*2000',
      },
      {
        size: '700*2000',
      },
      {
        size: '800*2000',
      },
      {
        size: '900*2000',
      },
    ],
    for_order: false,
    hit_sale: false,
    productalbum: [
      {
        image: img5,
      },
    ],
    productalbumcolor: [],
  },
  {
    id: 1,
    type: 'interior_door',
    category: 'laminate',
    name: 'Классика ПГ',
    price: 2200,
    for_sale: false,
    price_discount: 0,
    subproduct: [],
    description:
      '<p>Классика ПГ</p>\r\n\r\n<p>Грунтовая дверь под покраску</p>',
    size: [
      {
        size: '600*2000',
      },
      {
        size: '700*2000',
      },
      {
        size: '800*2000',
      },
      {
        size: '900*2000',
      },
    ],
    for_order: false,
    hit_sale: false,
    productalbum: [
      {
        image: img6,
      },
    ],
    productalbumcolor: [],
  },
];
