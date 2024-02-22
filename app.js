function amountReducer(amount, action) {
  switch (action.type) {
    case "add":
      return amount + action.payload;

    case "take":
      return amount - action.payload;

    case "clear":
      return 0;

    default:
      return amount;
  }
}

function createStore(reducer, initialState) {
  const callbacks = [];
  let state = initialState;

  return {
    dispatch(action) {
      state = reducer(state, action);

      callbacks.forEach((callback) => callback());
    },

    subscribe(callback) {
      callbacks.push(callback);
    },

    getState() {
      return state;
    },
  };
}

const { dispatch, subscribe, getState } = createStore(amountReducer, 100);

subscribe(() => {
  const amount = getState();
  console.log(amount);
});

dispatch({ type: "add", payload: 50 });
dispatch({ type: "add", payload: 100 });
dispatch({ type: "take", payload: 25 });
dispatch({ type: "add", payload: 100 });
dispatch({ type: "add", payload: 50 });
dispatch({ type: "add", payload: 50 });
dispatch({ type: "add", payload: 50 });
dispatch({ type: "take", payload: 105 });
dispatch({ type: "clear" });
