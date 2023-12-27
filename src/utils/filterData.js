export const INITIAL_FILTER_STATE = {
  search: '',
  ordering: 'price',

  type: '',
  category: '',
  for_sale: false,

  price: {
    minVal: 0,
    maxVal: 75000,
  },
};

export const filterOptions = [
  {
    title: 'Акция',
    category: 'for_sale',
    type: 'checkbox',
  },
  {
    title: 'Входные двери',
    category: 'entrance_door',
    type: 'select',
  },

  {
    title: 'Межкомнатные двери',
    category: 'interior_door',
    type: 'select',
  },
  {
    title: 'Царговые',
    category: 'royal',
    type: 'radio',
    items: [
      {
        title: 'ПВХ',
        category: 'pvc',
        type: 'radio',
      },
      {
        title: 'Шпон',
        category: 'veneer',
        type: 'radio',
      },
      {
        title: 'Ламинат',
        category: 'laminate',
        type: 'radio',
      },
      {
        title: 'Массив натуральный',
        category: 'solid',
        type: 'radio',
      },
    ],
  },

  {
    title: 'Рольставни',
    category: 'roller_shutters',
    type: 'select',
  },
  {
    title: 'Окна',
    category: 'window',
    type: 'select',
  },
  {
    title: 'Фурнитура',
    category: 'accessories',
    type: 'select',
  },
  {
    title: 'Стоимость',
    category: 'price',
    type: 'range',
  },
];

export const sortButtons = [
  { title: 'По возрастанию', id: 'price' },
  { title: 'По убыванию', id: '-price' },
];
