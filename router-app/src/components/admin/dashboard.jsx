import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Users from "./users";
import Posts from "./posts";

const Dashboard = ({ match: { url } }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link to="/admin/users">Users</Link>
          {/* bug admin/users */}
        </li>
        <li>
          <Link to="/admin/posts">Posts</Link>
        </li>
      </ul>
      <div className="container">
        <Switch>
          <Route path="/admin/users" component={Users} />
          <Route path="/admin/posts" component={Posts} />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
