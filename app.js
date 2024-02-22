import { actions } from "./store/amount.js";
import { store } from "./store/index.js";

const { dispatch, subscribe, getState } = store;

const unsubscribe = subscribe(() => {
  const amount = getState();
  console.log(amount);
});

dispatch(actions.add(50));
dispatch(actions.add(150));
dispatch(actions.take(25));
dispatch(actions.clear());
dispatch(actions.add(100));
unsubscribe();
dispatch(actions.add(15));
dispatch(actions.take(20));
