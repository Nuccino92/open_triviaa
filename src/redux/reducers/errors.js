import { GET_ERRORS } from "../actions/types";

const initialState = {
  message: null,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default errorReducer;
