import React, {useState} from "react";

//import any components needed
import SpecialButton from "./SpecialButton";

//Import your array data to from the provided data file
import {specials} from "../../../data";

const Specials = ({updateValue}) => {
  // STEP 2 - add the imported data to state
  const [specialState, newSpecialState] = useState(specials);

  return (
    <div className = "specialButtonContainer">
      {specialState.map(special => {
        return ( 
          <SpecialButton key = {special} specials = {special} updateValue = {(e) => updateValue(special)} />
        );
      })}
    </div>
  );
};

export default Specials;