import App from "./components/app/app.jsx";
import ReactDOM from 'react-dom';
import React from "react";
import { Provider } from "react-redux";
import { offer } from "./mock/mock.jsx";
import { ActionCreator } from "./store/action.js";
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import redusers from "./store/redusers.js";

const store = createStore(
  redusers,
  composeWithDevTools(),
);

// store.dispatch(ActionCreator.loadOffers(offer));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
