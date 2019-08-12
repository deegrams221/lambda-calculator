import React from "react";

const SpecialButton = (props) => {
  console.log('specialButton', props);
  return (
    <button className = 'specialButton'>{props.specials}</button>
  );
};

export default SpecialButton;