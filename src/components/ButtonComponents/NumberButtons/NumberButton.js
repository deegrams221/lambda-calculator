import React from "react";

const NumberButton = (props) => {
  console.log('NumberButton: ', props);
  return (
    <button className = 'numberButton'>{props.numbers}</button>
  );
};

export default NumberButton;