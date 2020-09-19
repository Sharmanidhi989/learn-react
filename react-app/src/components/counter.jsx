import React, { Fragment } from "react";

const Counter = () => {
  // React.createElement('h1') i.e first param is type of element to be rendered
  return (
    <Fragment>
      <h1>Hey Counter</h1>
      <button>count ++</button>
    </Fragment>
  );
};

export default Counter;
