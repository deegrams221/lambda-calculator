import React, {useState} from "react";

//import any components needed

import NumberButton from "./NumberButton";

//Import your array data to from the provided data file
import {numbers} from "../../../data";

const Numbers = ({updateValue}) => {
  // STEP 2 - add the imported data to state
  const [numberState, newNumberState] = useState(numbers);
  //console.log(numberState);
  return (
    <div className = "numberButtonContainer">
      {numberState.map((number, index) => {
        return ( 
          <NumberButton key = {index} numbers = {number} updateValue = {(e) => (updateValue)} />
        );  
      })}

    </div>
  );
};

export default Numbers;