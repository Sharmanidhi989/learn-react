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

  return (
    <thead>
      <tr>
        {columns.map((column, index) => {
          return (
            <th key={index} onClick={() => raiseSort(column.path)}>
              {column.label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
