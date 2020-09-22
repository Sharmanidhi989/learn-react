import React, { Fragment, useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./shared/like";
const Movies = () => {
  const [movies, setMovies] = useState(getMovies());

  function handleDelete(movie) {
    setMovies(movies.filter((m) => m._id !== movie._id));
  }

  function handleLike(movie) {
    const films = [...movies];
    const index = films.indexOf(movie);
    films[index] = { ...films[index] };
    films[index].liked = !films[index].liked;
    setMovies(films);
  }

  if (movies.length === 0) {
    return <h1>There are no movies to show</h1>;
  } else {
    return (
      <Fragment>
        <div className="container">
          <h3 className="text-center">
            There are {movies.length} in the list.
          </h3>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Like</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => {
                let {
                  _id,
                  title,
                  genre,
                  numberInStock,
                  dailyRentalRate,
                  liked,
                } = movie;
                return (
                  <tr key={_id}>
                    <td>{title}</td>
                    <td>{genre.name}</td>
                    <td>{numberInStock}</td>
                    <td>{dailyRentalRate}</td>
                    <td>
                      <Like liked={liked} onLike={() => handleLike(movie)} />
                    </td>
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
        </div>
      </Fragment>
    );
  }
};

export default Movies;
