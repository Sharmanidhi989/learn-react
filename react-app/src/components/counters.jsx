import React, { Fragment, useState } from "react";
import Counter from "../components/counter";

const items = [
  { id: 1, value: 0 },
  { id: 2, value: 4 },
  { id: 3, value: 5 },
  { id: 4, value: 4 },
  { id: 5, value: 0 },
];

const Counters = () => {
  const [counters, setCounters] = useState(items);

  function handleDelete(id) {
    setCounters(counters.filter((c) => c.id != id));
  }

  function handleReset() {
    let newCounters = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(newCounters);
  }

  return (
    <Fragment>
      <button onClick={handleReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={() => handleDelete(counter.id)}
          value={counter.value}
          id={counter.id}
        >
          <h4>I am a new counter: MY id #{counter.id}</h4>
        </Counter>
      ))}
    </Fragment>
  );
};

export default Counters;
