import { combineReducers } from 'redux';

import shoppingReducer from './shoppingReducer';
import cartReducer from './cartReducer';
import toolbarMenuReducer from './toolbarMenuReducer';

const combinedReducers = combineReducers({
  shoppingState: shoppingReducer,
  cartState: cartReducer,
  toolbarMenuState: toolbarMenuReducer
});

export default combinedReducers;
