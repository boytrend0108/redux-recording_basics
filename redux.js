export function createStore(
  reducer,
  initialState = reducer(undefined, {}), // reducer return initial state we set
  ) { 
  const callbacks = new Set();
  let state = initialState;

  return {
    dispatch(action) { // change state
      state = reducer(state, action);

      callbacks.forEach((callback) => callback());
    },

    subscribe(callback) { // add callback to Set
      callbacks.add(callback);

      return () => { // remove callback from Set
        callbacks.delete(callback);
      }
    },

    getState() { 
      return state;
    },
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
