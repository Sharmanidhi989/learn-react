import React from "react";
const ListGroup = (props) => {
  const { items, onGenreSelect, textProperty, valueProperty } = props;
  return (
    <ul className="list-group">
      <li
        className="list-group-item"
        onClick={() => {
          onGenreSelect(null);
        }}
      >
        All Genres
      </li>
      {items.map((item) => {
        return (
          <li
            key={item[valueProperty]}
            className="list-group-item"
            onClick={() => {
              onGenreSelect(item);
            }}
          >
            {item[textProperty]}
          </li>
        );
      })}
    </ul>
  );
};

export default ListGroup;
