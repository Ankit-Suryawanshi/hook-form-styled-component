import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../container/Login";
import Profile from "../container/admin/profile";
import Task from "../components/Admin/task";
import Developer from "../components/Admin/developer";
// eslint-disable-next-line arrow-body-style
const Routers = () => {
  return (
    <div style={{ backgroundColor: "#456789", height: "821px" }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/showDeveloper" component={Developer} />
          <Route path="/showTask" component={Task} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routers;
