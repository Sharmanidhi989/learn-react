import React, { Component } from "react";
class Like extends Component {
  heartIcon() {
    return this.props.liked ? "fa fa-heart" : "fa fa-heart-o";
  }

  render() {
    return (
      <i
        onClick={this.props.onLike}
        className={this.heartIcon()}
        aria-hidden="true"
        style={{ cursor: "pointer" }}
      ></i>
    );
  }
}

export default Like;
