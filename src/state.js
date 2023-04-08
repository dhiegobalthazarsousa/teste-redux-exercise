import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore } from 'redux';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const actionNextColor = {
  type: 'NEXT_COLOR',
};

const actionPreviousColor = {
  type: 'PREVIOUS_COLOR',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'NEXT_COLOR':
    return {
      ...state,
      index: state.index === 5 ? state.index + 0 : state.index + 1,
    };
  case 'PREVIOUS_COLOR':
    return {
      ...state,
      index: state.index === 0 ? state.index - 0 : state.index - 1,
    };
  default:
    return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export {store, actionNextColor, actionPreviousColor};
