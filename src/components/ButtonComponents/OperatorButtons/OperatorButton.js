import React from "react";

const OperatorButton = ({operators: {char, value}}) => {
  //console.log('OperatorButton: ', props);
  return (
    <button className = "operatorButton">{char}</button>
  );
};

export default OperatorButton;