import React from "react";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>L'eau bout.</p>;
  }
  return <p>L'eau ne bout pas.</p>;
}

export default BoilingVerdict;
