import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { itemCount, pageSize, onPageChange } = props;
  const pagesCount = Math.ceil(itemCount / pageSize);
  const pages = pagesCount === 1 ? [] : _.range(1, pagesCount + 1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li
              className={
                page === props.currentPage ? "page-item active" : "page-item"
              }
              key={page}
            >
              <a
                className="page-link"
                onClick={() => {
                  onPageChange(page);
                }}
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired, // make it mandatory
  pageSize: PropTypes.number,
  pagesCount: PropTypes.number,
  onPageChange: PropTypes.func,
};

// error example --> invalid prop 'nameOfProp' of type 'string'
// gives warnings in only development phase

export default Pagination;
