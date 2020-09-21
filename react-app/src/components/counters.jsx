import React, { Fragment } from "react";
import Counter from "../components/counter";

const Counters = (props) => {
  const { handleDelete, handleReset, handleIncrement, counters } = props;
  return (
    <Fragment>
      <button onClick={handleReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={() => handleDelete(counter.id)}
          onIncrement={() => handleIncrement(counter)}
          counter={counter}
        >
          <h4>I am a new counter: MY id #{counter.id}</h4>
        </Counter>
      ))}
    </Fragment>
  );
};

export default Counters;
