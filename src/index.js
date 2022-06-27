import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

import reducers from "./redux/reducers";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = configureStore({ reducer: reducers }, composeWithDevTools(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
