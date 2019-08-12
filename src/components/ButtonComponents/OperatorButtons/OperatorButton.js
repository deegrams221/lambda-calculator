import React from "react";

const OperatorButton = (props) => {
  console.log('OperatorButton: ', props);
  return (
    <button className = 'operatorButton'>{props.operators}</button>
  );
};

export default OperatorButton;