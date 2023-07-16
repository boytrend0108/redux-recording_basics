import { actions } from './store/amount.js';
import { store } from './store/index.js';

const { subscribe, getState, dispatch } = store;

const amount = getState();
console.log(amount);

const unsubscribe = subscribe(() => {
  const amount = getState();
  console.log(amount);
});

dispatch(actions.add(50));
dispatch(actions.add(10));
dispatch(actions.take(10));
dispatch(actions.take(40));
dispatch(actions.clear());

unsubscribe();
