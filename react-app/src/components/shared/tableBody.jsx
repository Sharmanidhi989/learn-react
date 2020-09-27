import React from "react";
import _ from "lodash";
import { func } from "prop-types";

const TableBody = ({ data, columns }) => {
  function renderCell(item, column) {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  }

  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {columns.map((column) => (
            <td key={index + (column.path || column.key)}>
              {renderCell(item, column)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
