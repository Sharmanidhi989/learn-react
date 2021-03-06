import React, { Fragment, useEffect, useState } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieform";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import ProtectedRoute from "./components/shared/protectedRoute";
import UserContext from "./components/context/userContext";
import { logout, CurrentUser } from "./services/authService";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    try {
      const currentUser = CurrentUser();
      setCurrentUser(currentUser);
    } catch (ex) {}
  }, []);

  function handleLogout() {
    logout();
    setCurrentUser({});
  }

  function handleUserTouched() {
    return "@!@!@!@!@!@!@!@!@!";
    // can also update the user state here
    // demo to update the context
  }

  return (
    // returns a provider component
    <UserContext.Provider
      value={{ currentUser, onUserTouch: handleUserTouched }}
    >
      <Fragment>
        <Navbar currentUser={currentUser} onLogout={handleLogout} />
        <ToastContainer />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect exact from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </Fragment>
    </UserContext.Provider>
  );
}

export default App;
