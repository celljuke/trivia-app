import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import asyncComponent from "./AsyncComponent";
import store from '../store';

const AsyncHome = asyncComponent(() => import('./Home'));
const AsyncQuestion = asyncComponent(() => import('./Question'));
const AsyncResult = asyncComponent(() => import('./Result'));


const PermissonRoute = ({ component, ...rest }) => (
  <Route {...rest} render={(props) => {
    const state = store.getState();

    if (state.username && state.questions.length) {
      return React.createElement(component, props);
    }
    else {
      return <Redirect to="/" />;
    }
  }} />
);

export default () => (
  <Switch>
    <Route exact path="/" component={AsyncHome} />
    <PermissonRoute exact path="/questions" component={AsyncQuestion} />
    <PermissonRoute exact path="/result" component={AsyncResult} />
  </Switch>
);
