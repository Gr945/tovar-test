import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import reducer from "./Redux/reducer";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { watcher } from "./Redux/saga/watcher";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watcher);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
