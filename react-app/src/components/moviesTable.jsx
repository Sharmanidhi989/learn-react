import React from "react";
import TableBody from "./shared/tableBody";
import Like from "./shared/like";
import TableHeader from "./shared/tableHeader";

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
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody data={movies} columns={columns} />
    </table>
  );
};

export default MoviesTable;
