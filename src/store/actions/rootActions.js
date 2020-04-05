let idList = 0;
export const addList = text => ({
  type: 'ADD_LIST',
  id: idList++,
  title: text,
  cards: [],
});
