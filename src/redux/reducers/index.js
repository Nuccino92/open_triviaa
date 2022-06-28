import { combineReducers } from "redux";

import userReducer from "./user";
import gameReducer from "./game";
import errorReducer from "./errors";

export default combineReducers({
  userReducer,
  gameReducer,
  errorReducer,
});
