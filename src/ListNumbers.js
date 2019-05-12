import React from "react";

function ListNumbers(props) {
  // Correct ! Pas la peine de spécifier la clé ici :
  let tab = props.numbers.map(number => <li>{number}</li>);
  return <ul>{tab}</ul>;
}

export default ListNumbers;
