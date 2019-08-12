import React, {useState} from "react";

//import any components needed
import OperatorButton from './OperatorButton';

//Import your array data to from the provided data file
import {operators} from '../../../data';

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, newOperatorState] = useState(operators);
  return (
    <div className = 'operatorButtonContainter'>
      {operators.map(operator => {
        return <OperatorButton operators = {operator} />
      })}
    </div>
  );
};

export default Operators;