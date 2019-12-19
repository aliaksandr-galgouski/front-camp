
import React from "react";
import {Button, ButtonGroup} from "components/common/inputs";

class ButtonToggler extends React.Component {
  constructor(props){
    super(props);
    this.state = { selectedOption: this.props.options[0] };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.setState({ selectedOption: value });
    this.props.onToggle(value);
  }

  isSelectedOption(option) {
    return option === this.state.selectedOption;
  }

  render() {
    const {size, options = [], ...restProps} = this.props;
    return (
      <ButtonGroup {...restProps}>
        {options.map(option => this.renderButton(option, size))}
      </ButtonGroup>
    );
  }

  renderButton(option, size) {
    const isSelected = this.isSelectedOption(option);
    return (
      <Button key={option} size={size}
        primary={isSelected} disabled={isSelected} 
        onClick={() => this.handleClick(option)}>
          {option}
      </Button>
    );  
  }
}

export default ButtonToggler;
