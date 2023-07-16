import { actions as amountActions } from './store/amount.js';
import { actions as goodsActions } from './store/goods.js';
import { store } from './store/index.js';

const { subscribe, getState, dispatch } = store;

const state = getState();
console.log(state);

const unsubscribe = subscribe(() => {
  const state = getState();
  console.log(state);
});

dispatch(amountActions.add(50));
dispatch(amountActions.add(10));
dispatch(goodsActions.add(10));
dispatch(amountActions.take(10));
dispatch(amountActions.take(40));
dispatch(goodsActions.add(40));
dispatch(amountActions.clear());

unsubscribe();
