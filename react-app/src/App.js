import React, { Fragment, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Movies from "./components/movies";

function App() {
  return (
    <Fragment>
      <Navbar />
      <main className="container">
        <Movies />
      </main>
    </Fragment>
  );
}

export default App;
