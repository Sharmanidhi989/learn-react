import React, { Fragment, useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(props.value);
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);
  // React.createElement('h1') i.e first param is type of element to be rendered
  return (
    <Fragment>
      {props.children}
      <span className={newStyle(count)}>{FormatCount(count)}</span>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => setCount(count + 1)}
      >
        count ++
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
      {renderTags(tags)}
      {[].length === 0 && "given an empty array instead of tags"}
      {/* when the value is not boolean then it will try to conclude whether the value is trusy or false and then return the value */}
      {renderTags([])}
    </Fragment>
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
