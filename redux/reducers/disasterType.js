import { combineReducers } from 'redux';
import { DISASTER_TYPE_ACTIONS } from '../actions/disasterTypeActions';

const type = (state = "meow", action) => {
  switch (action.type) {
    case DISASTER_TYPE_ACTIONS.SET_DISASTER_TYPE:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  type,
});
