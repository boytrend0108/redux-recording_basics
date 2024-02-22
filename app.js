import { store } from "./store/index.js";
import { actions as goodsActions } from "./store/goods.js";
import { actions as amountActions } from "./store/amount.js";
import { actions as positionActions } from "./store/position.js";

const { dispatch, subscribe, getState } = store;

const unsubscribe = subscribe(() => {
  const state = getState();
  console.log(state.amount);
});

dispatch(positionActions.moveLeft());
dispatch(positionActions.moveDown());
dispatch(amountActions.add(50));
dispatch(goodsActions.add(1000));
dispatch(amountActions.take(1000));
dispatch(amountActions.add(1000));
dispatch(amountActions.take(1000));
dispatch(amountActions.add(1000));
dispatch(goodsActions.add(1000));
unsubscribe();
