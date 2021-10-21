import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { About } from "../Pages/About";
import { Home } from "../Pages/Home";

export const Routes: React.FC = ({ children }) => {
  return (
    <BrowserRouter basename="react-lazy">
      {children}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
};
