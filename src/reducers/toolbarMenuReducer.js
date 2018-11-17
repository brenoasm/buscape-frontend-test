import { TOGGLE_MENU_VISIBILITY } from '../actions';

const toolbarMenuInitialState = {
  open: false
};

const toolbarMenuReducer = (state = toolbarMenuInitialState, action) => {
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
