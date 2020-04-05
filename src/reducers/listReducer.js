const initialState = [
  {
    id: 0,
    title: "first list",
    cards: [
      {
        id: 0,
        name: 'I am a card',
        date: '3/4/20'
      },
      {
        id: 1,
        name: 'I am a card 1',
        date: '2/3/20'
      },
      {
        id: 2,
        name: 'I am a card 2',
        date: '3/9/20'
      }
    ]
  },
  {
    id: 1,
    title: "first list",
    cards: [
      {
        id: 0,
        name: 'I am a card',
        date: '3/4/20'
      },
    ]
  },
  {
    id: 2,
    title: "first list",
    cards: [
      {
        id: 0,
        name: 'I am a card',
        date: '3/4/20'
      },
      {
        id: 1,
        name: 'I am a card 1',
        date: '2/3/20'
      },
    ]
  },
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export  default listReducer;
