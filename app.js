import { store } from "./store/index.js";
import { actions as goodsActions } from "./store/goods.js";
import { actions as amountActions } from "./store/amount.js";

const { dispatch, subscribe, getState } = store;

const unsubscribe = subscribe(() => {
  const state = getState();
  console.log(state);
});

dispatch(amountActions.add(50));
dispatch(goodsActions.add(1000));
