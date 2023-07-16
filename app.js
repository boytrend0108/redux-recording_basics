import { store } from './store/index.js';

const { subscribe, getState, dispatch } = store;

const amount = getState();
console.log(amount);

const unsubscribe = subscribe(() => {
  const amount = getState();
  console.log(amount);
});

dispatch({ type: 'take', payload: 50 });
unsubscribe();
dispatch({ type: 'take', payload: 10 });
dispatch({ type: 'clear' });
dispatch({ type: 'add', payload: 10 });
dispatch({ type: 'add', payload: 50 });
