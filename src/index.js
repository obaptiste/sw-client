import App from "./components/App";
import Home from "./components/Home";
import { Provider } from "react-redux";
import { fetchRoots } from "actions";
import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import store from "./store";
import { syncHistoryWithStore } from "react-router-redux";
import { createBrowserHistory } from "history";
import {
  Route,
  //rowserRouter as Router,
  Router,
  Switch,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
	}
`;
store.dispatch(fetchRoots);

const history = syncHistoryWithStore(createBrowserHistory(), store);

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <GlobalStyle />
      <App>
        <Switch>
          <Route component={Home} exact path={"/"} />
        </Switch>
      </App>
    </Router>
  </Provider>
);

ReactDOM.render(routes, document.getElementById("root"));
