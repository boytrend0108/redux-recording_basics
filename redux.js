export function createStore(
  reducer, 
  initialState = reducer(undefined, {}),
) {
  let callbacks = new Set();
  let state = initialState;

  return {
    dispatch(action) {
      state = reducer(state, action);
  
      callbacks.forEach(callback => callback());
    },
    subscribe(callback) {
      callbacks.add(callback);

      return () => {
        callbacks.delete(callback);
      };
    },
    getState() {
      return state;
    }
  };
}

export function combineReducers(reducers) {
  return (state = {}, action) => {
    const newState = {};

    for (const [key, reducer] of Object.entries(reducers)) {
      newState[key] = reducer(state[key], action);
    }

    return newState;
  }
}