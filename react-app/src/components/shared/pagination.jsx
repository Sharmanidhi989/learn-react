import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemCount / pageSize);
  const pages = pagesCount === 1 ? [] : _.range(1, pagesCount + 1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={page}
            >
              <span
                className="page-link"
                onClick={(event) => {
                  onPageChange(event, page);
                }}
              >
                {page}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number, // make it mandatory
  pageSize: PropTypes.number,
  pagesCount: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
};

// error example --> invalid prop 'nameOfProp' of type 'string'
// gives warnings in only development phase

export default Pagination;
