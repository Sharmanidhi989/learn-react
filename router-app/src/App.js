import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
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
            <Route path="/posts/:year/:month" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" exact component={Home} />
          </Switch>
          {/* <Route path="/" exact component={Home} /> exactly match the route */}
        </div>
      </div>
    );
  }
}

export default App;
