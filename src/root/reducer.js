import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';


function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + 5 };
    case 'DECREMENT':
      return { ...state, value: state.value - 10 };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  routing: routerReducer,
  counter: counterReducer,
});

export default rootReducer;
