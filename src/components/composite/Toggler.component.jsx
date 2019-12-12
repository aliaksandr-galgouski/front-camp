import React, { useState } from "react";
import {Button, ButtonGroup} from "components/common/inputs";

const Toggler = ({onChange, size, options = [], ...props}) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const selectOption = option => {
    setSelectedOption(option);
    if(typeof onChange === "function"){
      onChange(option);
    }
  };

  return (
    <ButtonGroup {...props} >
      { 
        options.map(option => {
          const isSelected = option === selectedOption;
          return <Button size={size}
            key={option} 
            primary={isSelected} 
            disabled={isSelected} 
            onClick={() => selectOption(option)} >
            {option}
          </Button>
        })
      }
    </ButtonGroup>
  );
}

export default Toggler;
