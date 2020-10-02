import React, { Fragment, useState, useEffect } from "react";
import http from "../services/httpService";
// import { getGenres } from "../services/genreService";
import Pagination from "./shared/pagination";
import paginate from "../utils/paginate";
import ListGroup from "./shared/listGroup";
import MoviesTable from "./moviesTable";
import _ from "lodash";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });
  const stepSize = useState(4)[0];

  useEffect(() => {
    http.get("http://localhost:3900/api/movies").then((res) => {
      setMovies(res.data);
    });
    http.get("http://localhost:3900/api/genres").then((response) => {
      const genres = [{ _id: "", name: "All Genres" }, ...response.data];
      setGenres(genres);
    });
  }, []); //in favor of componentDidMount

  function getPagedData() {
    const filtered =
      selectedGenre && selectedGenre._id
        ? movies.filter((m) => m.genre._id === selectedGenre._id)
        : movies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies_batch = paginate(sorted, currentPage, stepSize);
    return { totalCount: filtered.length, data: movies_batch };
  }

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

  function handlePageChange(event, page) {
    event.preventDefault();
    setCurrentPage(page);
  }

  function handleGenreSelect(genre) {
    setCurrentPage(1);
    setSelectedGenre(genre);
  }

  function handleSort(column) {
    setSortColumn(column);
  }

  if (movies.length === 0) {
    return <h1>There are no movies to show</h1>;
  } else {
    const { totalCount, data } = getPagedData();
    return (
      <Fragment>
        <h3 className="text-center">There are {totalCount} in the list.</h3>
        <div className="row">
          <div className="col-sm-2">
            <ListGroup
              items={genres}
              onGenreSelect={handleGenreSelect}
              selectedGenre={selectedGenre}
            />
          </div>
          <div className="col-sm-10">
            {/* all the components should be on same level of abstraction */}
            <MoviesTable
              movies={data}
              onDelete={handleDelete}
              onLike={handleLike}
              onSort={handleSort}
              sortColumn={sortColumn}
            />
            <Pagination
              itemCount={totalCount}
              pageSize={stepSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </Fragment>
    );
  }
};

export default Movies;
