const initialState = {
  x: 0,
  y: 0,
};

const reducers = {
  moveUp: (state) => ({
    ...state,
    y: state.y - 1,
  }),
  moveDown: (state) => ({
    ...state,
    y: state.y + 1,
  }),
  moveLeft: (state) => ({
    ...state,
    x: state.x - 1,
  }),
  moveRight: (state) => ({
    ...state,
    x: state.x + 1,
  }),
};
