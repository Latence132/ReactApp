import React from "react";

function ListNumbers(props) {
  let tab = props.numbers.map(number => (
    <li className={"collection-item box box" + number} key={number.toString()}>
      {number}
    </li>
  ));

  return <ul className="collection quotes">{tab}</ul>;
}

export default ListNumbers;
