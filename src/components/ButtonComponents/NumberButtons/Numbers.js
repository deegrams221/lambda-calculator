import React, {useState} from "react";

//import any components needed
import NumberButton from './NumberButton';

//Import your array data to from the provided data file
import {numbers} from '../../../data';

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, newNumberState] = useState(numbers);
  return (
    <div className = 'numberButtonContainer'>
      {numbers.map(number => {
        return <NumberButton numbers = {number} />
      })}
    </div>
  );
};

export default Numbers;