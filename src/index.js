import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import rootReducer from "reducers";
import {ErrorBoundary} from "components/system";
import App from "components/App";

import "styles/index.css";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>    
    <Router>
      <ErrorBoundary>
        <App/>
      </ErrorBoundary> 
    </Router>      
  </Provider>,
  document.getElementById("root")
);
