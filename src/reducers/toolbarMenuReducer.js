import { TOGGLE_MENU_VISIBILITY } from '../actions';

export const toolbarMenuInitialState = {
  open: false
};

export const toolbarMenuReducer = (state = toolbarMenuInitialState, action) => {
  switch (action.type) {

    case TOGGLE_MENU_VISIBILITY:
      return {
        open: !state.open
      }

    default:
      return state;
  }
};

export default toolbarMenuReducer;
