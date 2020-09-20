import React from "react";
import "./App.css";
import Counters from "./components/counters";
import Movies from "./components/movies";

function App() {
  return (
    <main className="container">
      <Counters />
      <Movies />
    </main>
  );
}

export default App;
