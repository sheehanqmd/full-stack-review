import React from "react";
import {Switch, Route} from "react-router-dom";
import Landing from "./components/authorization/Landing";
import Registration from "./components/authorization/Registration";
import Login from "./components/authorization/Login";
import Dashboard from "./components/authorization/Dashboard";

export default (
    <Switch>
      <Route component={ Landing } path="/" exact />
      <Route component={ Registration } path="/register" />
      <Route component={ Login } path="/login" />
      <Route component={ Dashboard } path="/dashboard" />
    </Switch>
  )