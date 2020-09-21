import React, { Fragment } from "react";
import Counter from "../components/counter";

const Counters = (props) => {
  return (
    <Fragment>
      <button
        onClick={props.handleReset}
        className="btn btn-primary btn-sm m-2"
      >
        Reset
      </button>
      {props.counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={() => props.handleDelete(counter.id)}
          onIncrement={() => props.handleIncrement(counter)}
          counter={counter}
        >
          <h4>I am a new counter: MY id #{counter.id}</h4>
        </Counter>
      ))}
    </Fragment>
  );
};

export default Counters;
