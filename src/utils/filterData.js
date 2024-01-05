export const INITIAL_FILTER_STATE = {
  search: '',
  ordering: 'ascending',

  type: 'entrance_door',
  category: '',
  for_sale: false,

  price: {
    min: 0,
    max: 75000,
  },
};

export const filterOptions = [
  {
    id: 1,
    title: 'Акция',
    category: 'for_sale',
    type: 'checkbox',
  },
  {
    id: 2,
    title: 'Входные двери',
    category: 'entrance_door',
    type: 'select',
  },
  {
    id: 3,
    title: 'Межкомнатные двери',
    category: 'interior_door',
    type: 'select',
    items: [
      {
        id: 4,
        title: 'Царговые',
        category: 'royal',
        type: 'radio',
      },
      {
        id: 5,
        title: 'ПВХ',
        category: 'pvc',
        type: 'radio',
      },
      {
        id: 6,
        title: 'Шпон',
        category: 'veneer',
        type: 'radio',
      },
      {
        id: 7,
        title: 'Ламинат',
        category: 'laminate',
        type: 'radio',
      },
      {
        id: 8,
        title: 'Массив натуральный',
        category: 'solid',
        type: 'radio',
      },
    ],
  },

  {
    id: 10,
    title: 'Рольставни',
    category: 'roller_shutters',
    type: 'select',
  },
  {
    id: 11,
    title: 'Окна',
    category: 'window',
    type: 'select',
  },
  {
    id: 12,
    title: 'Фурнитура',
    category: 'accessories',
    type: 'select',
  },
];

export const sortButtons = [
  { title: 'По возрастанию', id: 'ascending' },
  { title: 'По убыванию', id: 'descending' },
];
