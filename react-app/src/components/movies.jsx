import React, { Fragment, useState } from "react";
import { getMovies } from "../services/fakeMovieService";
const Movies = () => {
  const [movies, setMovies] = useState(getMovies());

  function handleDelete(movie) {
    setMovies(movies.filter((m) => m._id != movie._id));
  }

  if (movies.length === 0) {
    return <h1>There are no movies to show</h1>;
  } else {
    return (
      <Fragment>
        <h3 className="text-center">There are {movies.length} in the list.</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => {
              let { _id, title, genre } = movie;
              return (
                <tr key={index}>
                  <td>{_id}</td>
                  <td>{title}</td>
                  <td>{genre.name}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Fragment>
    );
  }
};

export default Movies;
