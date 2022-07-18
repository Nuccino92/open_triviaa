import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from "../actions/types";

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_FAIL:
      return {
        ...state,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
      };

    case LOGIN_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default userReducer;
