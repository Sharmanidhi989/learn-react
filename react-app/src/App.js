import React, { Fragment, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import Movies from "./components/movies";

const items = [
  { id: 1, value: 0 },
  { id: 2, value: 4 },
  { id: 3, value: 5 },
  { id: 4, value: 4 },
  { id: 5, value: 0 },
];

function App() {
  const [counters, setCounters] = useState(items);

  function handleDelete(id) {
    setCounters(counters.filter((c) => c.id != id));
  }

  function handleIncrement(counter) {
    const items = [...counters];
    const index = counters.indexOf(counter);
    items[index] = { ...counter };
    items[index].value++;
    setCounters(items);
  }

  function handleReset() {
    let newCounters = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(newCounters);
  }

  function handleDecrement(counter) {
    const items = [...counters];
    const index = counters.indexOf(counter);
    items[index] = { ...counter };
    items[index].value--;
    setCounters(items);
  }

  return (
    <Fragment>
      <Navbar count={counters.length} />
      <main className="container">
        <Counters
          handleDelete={handleDelete}
          handleIncrement={handleIncrement}
          handleReset={handleReset}
          handleDecrement={handleDecrement}
          counters={counters}
        />
      </main>
      <Movies />
    </Fragment>
  );
}

export default App;
