import { reducer as amountReducer } from './amount.js';
import { reducer as goodsReducer } from './goods.js';
import { combineReducers, createStore } from '../redux.js';

const rootReducer = combineReducers({
  amount: amountReducer,
  goods: goodsReducer,
});
export const store  = createStore(rootReducer);
