// Функция для формирования строки параметров URL на основе фильтров
export function buildUrlParams(filters) {
  const params = new URLSearchParams();

  // Проверяем, есть ли параметр search
  if (filters['search']) {
    params.append('search', filters['search']);
    return params.toString();
  }

  for (const key in filters) {
    // Проверяем, есть ли параметы для пагинации
    if (key === 'limit') {
      params.append('limit', filters['limit']);
      continue;
    }

    if (key === 'offset') {
      params.append('offset', filters['offset']);
      continue;
    }

    if (key === 'currentPage') {
      continue;
    }

    // Дальше проверям параметры для фильтрации
    if (key === 'ordering' && filters[key] === 'ascending') {
      params.append(key, 'price');
      continue;
    } else if (key === 'ordering' && filters[key] === 'descending') {
      params.append(key, '-price');
      continue;
    }

    if (typeof filters[key] === 'boolean' && filters[key] === true) {
      params.append(key, filters[key]);
      continue;
    }

    if (
      key === 'category' &&
      filters['type'] === 'interior_door' &&
      filters[key] !== ''
    ) {
      params.append(key, filters[key]);
      continue;
    }

    if (key === 'category' && filters[key] !== 'interior_door') {
      continue;
    }

    if (
      key === 'price' &&
      (filters[key].min !== 0 || filters[key].max !== 500000)
    ) {
      params.append('min_price', filters[key].min);
      params.append('max_price', filters[key].max);
      continue;
    }

    if (!filters[key].length) continue;

    if (filters[key] === 'search') {
      params.append(key, filters[key]);
      continue;
    }

    params.append(key, filters[key]);
  }
  return params.toString();
}
