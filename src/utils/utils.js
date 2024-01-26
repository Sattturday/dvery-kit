// записываем все в ЛС
export const saveToLocalStorage = (title, state) => {
  try {
    localStorage.setItem(`${title}`, JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

// достаем все из ЛС
export const loadFromLocalStorage = (title) => {
  try {
    const stateStr = localStorage.getItem(`${title}`);
    const state = stateStr ? JSON.parse(stateStr) : undefined;
    return state;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

export const findTitleByCategory = (category, options) => {
  for (const option of options) {
    if (option.category === category) {
      return option.title;
    }

    if (option.items && Array.isArray(option.items)) {
      const nestedTitle = findTitleByCategory(category, option.items);
      if (nestedTitle) {
        return nestedTitle;
      }
    }
  }

  return '';
};

export function formatPrice(price) {
  const priceStr = price.toString();

  if (priceStr.length > 3) {
    const formattedPrice = priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return formattedPrice;
  } else {
    return priceStr;
  }
}
