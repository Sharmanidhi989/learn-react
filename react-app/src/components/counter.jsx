import React, { Fragment, useState } from "react";

const Counter = (props) => {
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);
  // React.createElement('h1') i.e first param is type of element to be rendered
  return (
    <div className="row">
      {props.children}
      <div className="col-1">
        <span className={newStyle(props.counter.value)}>
          {FormatCount(props.counter.value)}
        </span>
      </div>
      <div className="col-11">
        <button
          className="btn btn-primary btn-sm m-1"
          onClick={() => props.onIncrement(props.counter)}
        >
          +
        </button>
        <button
          className="btn btn-secondary btn-sm m-1"
          onClick={() => props.onDecrement(props.counter)}
          disabled={props.counter.value === 0}
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => props.onDelete(props.counter.id)}
        >
          Delete
        </button>
      </div>
      {renderTags(tags)}
      {[].length === 0 && "given an empty array instead of tags"}
      {/* when the value is not boolean then it will try to conclude whether the value is trusy or false and then return the value */}
      {renderTags([])}
    </div>
  );
};

function newStyle(count) {
  return `m-2 badge ${count === 0 ? "badge-warning" : "badge-primary"}`;
}

function FormatCount(count) {
  return count === 0 ? "Zero" : count;
}

function renderTags(tags) {
  if (tags.length === 0) {
    return "No tags to display";
  } else {
    return (
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default Counter;
