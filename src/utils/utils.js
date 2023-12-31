// записываем все в ЛС
export const saveToLocalStorage = (title, state) => {
  try {
    localStorage.setItem(`${title}`, JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

// достаем все из ЛС
export const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem('state');
    const state = stateStr ? JSON.parse(stateStr) : undefined;
    console.log('state from ls:', state);
    return state;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};
