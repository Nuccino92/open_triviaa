import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = configureStore({ reducer: reducers }, composeWithDevTools(thunk));

export default store;
