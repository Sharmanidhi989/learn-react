import React from "react";
import Like from "./shared/like";

const MoviesTable = (props) => {
  const { movies, onDelete, onLike } = props;
  return (
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
                <Like liked={liked} onLike={() => onLike(movie)} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
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
  );
};

export default MoviesTable;
