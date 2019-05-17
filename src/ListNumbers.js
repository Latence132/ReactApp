import React from "react";

function ListNumbers(props) {
  // Correct ! Pas la peine de spécifier la clé ici :
  let tab = props.numbers.map(number => (
    <li className="collection-item">{number}</li>
  ));

  return <ul className="collection">{tab}</ul>;
}

export default ListNumbers;
