import React from "react";
const TableHeader = (props) => {
  const { columns, onSort, sortColumn } = props;

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

  function renderSortIcon(column) {
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;
    if (sortColumn.order === "desc") return <i className="fa fa-sort-desc"></i>;
  }

  return (
    <thead>
      <tr>
        {columns.map((column, index) => {
          return (
            <th
              className="clickable"
              key={index}
              onClick={() => raiseSort(column.path)}
            >
              {column.label} {renderSortIcon(column)}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
