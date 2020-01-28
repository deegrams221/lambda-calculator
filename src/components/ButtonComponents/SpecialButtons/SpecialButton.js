import React from "react";

const SpecialButton = (props) => {
  //console.log('specialButton: ', props);
  return (
    <button className = "specialButton" onClick = {props.updateValue}>{props.specials}</button>
  );
};

export default SpecialButton;