import React, { Fragment, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [imageUrl, setImageUrl] = useState("https://picsum.photos/200");

  const styles = {
    fontWeight: "bold",
    fontSize: 40,
  };

  // React.createElement('h1') i.e first param is type of element to be rendered
  return (
    <Fragment>
      <img src={imageUrl}></img>
      <span style={styles} className={newStyle(count)}>
        {FormatCount(count)}
      </span>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => setCount(count + 1)}
      >
        count ++
      </button>
    </Fragment>
  );
};

function newStyle(count) {
  return `m-2 badge ${count === 0 ? "badge-warning" : "badge-primary"}`;
}

function FormatCount(count) {
  return count === 0 ? "Zero" : count;
}

export default Counter;
