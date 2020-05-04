import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Layout from "../components/Layout";
function App() {
  return (
    <Fragment>
      <Layout />
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </Fragment>
  );
}

export default App;
