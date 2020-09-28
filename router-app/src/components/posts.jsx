import React from "react";

const Posts = (props) => {
  return (
    <div>
      <h1>Posts</h1>
      Year: {props.match.params.year}, Month: {props.match.params.month}
    </div>
  );
};

export default Posts;
