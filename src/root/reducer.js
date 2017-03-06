import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

import { INCREMENT, DECREMENT } from './action';

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  routing: routerReducer,
  counter: counterReducer,
});

export default rootReducer;
