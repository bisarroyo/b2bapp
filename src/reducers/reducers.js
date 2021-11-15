import { USER } from '../types/types';

const INITIAL_STATE = {
  users: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default: return state;
  }
};

export default reducer;
