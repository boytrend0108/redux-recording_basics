import { store } from "./store/index.js";

const { dispatch, subscribe, getState } = store;

const unsubscribe = subscribe(() => {
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
unsubscribe();
dispatch({ type: "take", payload: 105 });
dispatch({ type: "clear" });
