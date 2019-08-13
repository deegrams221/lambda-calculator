import React, {useState} from "react";

//import any components needed
import Display from "../../DisplayComponents/Display";
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file
import {numbers} from "../../../data";

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberState, newNumberState] = useState(numbers);
  return (
    <div className = "numberButtonContainer">
      {numberState.map((number, index) => {
        return ( 
          <NumberButton key = {index} numbers = {number} />
        );  
      })}
    </div>
  );
};

export default Numbers;