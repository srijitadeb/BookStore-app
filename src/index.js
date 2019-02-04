import React, { component } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import { App } from "./components/App";
import { About } from "./components/About";
import { Create } from "./components/Create";
import { Header } from "./components/Header";
import { BookInfo } from "./components/BookInfo";

const routes = [
  {
    path: "/create",
    component: Create,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/bookinfo/:id",
    component: BookInfo,
  },
  {
    path: "/booklist",
    component: App,
    // routes: [
    //   {
    //     path: "/booklist/bookinfo/:id",
    //     component: BookInfo,
    //   },
    // ],
  },
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

const routing = (
  <Router>
    <div>
      <Header />
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}

        {/* <Route path="/booklist" component={App}>
          <Route path="/booklist/bookinfo/:id" component={BookInfo} />
        </Route>
        <Route path="/create" component={Create} />
        <Route path="/about" component={About} /> */}
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("app"));

module.hot.accept();
