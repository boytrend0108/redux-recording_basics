export function createStore(
  reducer,
  initialState = reducer(undefined, {}) // reducer return initial state we set
) {
  const callbacks = new Set();
  let state = initialState;

  return {
    dispatch(action) {
      // change state
      state = reducer(state, action);

      callbacks.forEach((callback) => callback());
    },

    subscribe(callback) {
      // add callback to Set
      callbacks.add(callback);

      return () => {
        // remove callback from Set
        callbacks.delete(callback);
      };
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
  };
}

export function createSlice({
  name,
  initialState, 
  reducers,
}) {
  const actions = {};

  Object.keys(reducers).forEach((key) => {
    if (reducers[key].length === 2) {
      actions[key] = (payload) => ({
        type: `${name}/${key}`,
        payload,
      });
    } else {
      actions[key] = () => ({
        type: `${name}/${key}`,
      });
    }
  });

  function reducer(state = initialState, action) {
    const key = action.type 
      ? action.type.replace(`${name}/`, '')
      : '';

    const f = reducers[key];

    return f 
      ? f(state, action.payload) 
      : state;
  }
  
  return { reducer, actions };
}
