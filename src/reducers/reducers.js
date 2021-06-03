import { ITEM } from '../types/types';

const reducer = (state, action) => {
  switch (action.type) {
    case ITEM:
      return {
        ...state,
        item: action.payload,
        loading: false,
        error: '',
      };
    default: return state;
  }
};

export default reducer;
