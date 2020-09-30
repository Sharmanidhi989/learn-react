import React, { Component } from "react";
import axios from "axios";
import "./App.css";

const apiEndpoint = "http://jsonplaceholder.typicode.com/posts";
class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    // async and await
    // A promise is the object that holds the result of an async operation
    // states of promise pending -> resolved (success) OR rejected (failure)

    // const promise = axios.get("http://jsonplaceholder.typicode.com/posts");
    // // console.log(promise);
    // const response = await promise;
    // console.log(response);

    const { data: posts } = await axios.get(apiEndpoint);
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "Huntress", body: "Kate Quinn" };
    const { data } = await axios.post(apiEndpoint, obj);
    const posts = [data, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = (post) => {
    console.log("Update", post);
  };

  handleDelete = (post) => {
    console.log("Delete", post);
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
