import React, { Fragment, useState, useEffect } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./shared/like";
import Pagination from "./shared/pagination";
import paginate from "../utils/paginate";

const Movies = () => {
  const [movies, setMovies] = useState(getMovies());
  const [stepSize, setStepSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const movies_batch = paginate(movies, currentPage, stepSize);

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

  function handlePageChange(page) {
    setCurrentPage(page);
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
              <th>Title</th>
              <th>Genre</th>
              <th>Like</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies_batch.map((movie) => {
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
        <Pagination
          itemCount={movies.length}
          pageSize={stepSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Fragment>
    );
  }
};

export default Movies;
