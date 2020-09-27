import React from "react";
import Like from "./shared/like";

const MoviesTable = (props) => {
  const { movies, onDelete, onLike, onSort, sortColumn } = props;

  function raiseSort(path) {
    let column = { ...sortColumn };
    if (column.path === path) {
      column.order = column.order === "asc" ? "desc" : "asc";
    } else {
      column.path = path;
      column.order = "asc";
    }
    onSort(column);
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => raiseSort("title")}>Title</th>
          <th onClick={() => raiseSort("genre.name")}>Genre</th>
          <th onClick={() => raiseSort("numberInStock")}>Stock</th>
          <th onClick={() => raiseSort("dailyRentalRate")}>Rate</th>
          <th>Like</th>
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
