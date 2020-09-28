import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
    // this.props.history.push("/products");
    this.props.history.replace("/products"); // example: user login
  };

  render() {
    return (
      <div>
        <h1>Product Details -{this.props.match.params.id} </h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}
// push and replace is history param of router push will add a new element in the history to go back to
// while replace will replace the current address so we don't have history
export default ProductDetails;
