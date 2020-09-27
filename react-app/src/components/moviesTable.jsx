import React from "react";
import Like from "./shared/like";
import Table from "./shared/table";

const MoviesTable = (props) => {
  const { movies, onDelete, onLike, onSort, sortColumn } = props;

  const columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onLike={() => onLike(movie)}></Like>
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <Table
      data={movies}
      columns={columns}
      onSort={onSort}
      sortColumn={sortColumn}
    />
  );
};

export default MoviesTable;
