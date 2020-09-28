import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            {/* order your routes fro more specific ones to generic ones -> first child will be matched  */}
            <Route
              path="/products"
              render={(props) => <Products sortBy="newest" {...props} />}
            />
            {/* Route component is a wraper around the component that we pass in it. It has three props history, location, map */}
            <Route path="/posts/:year?/:month?" component={Posts} />
            {/* when we pass params in routes by default they are required to make them optional add ? to them */}
            <Route path="/admin" component={Dashboard} />
            <Redirect from="/messages" to="/posts" />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
          {/* <Route path="/" exact component={Home} /> exactly match the route */}

          {/* the query string parameters are present in the location under search:
          example: localhost:3000/posts/2018/06?sortBy=newest&approved=true */}
        </div>
      </div>
    );
  }
}

export default App;
