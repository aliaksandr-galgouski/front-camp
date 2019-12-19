import React from "react";
import PropTypes from "prop-types";
import mergeClassNames from "classnames";

import {Label} from "components/common/layout";

import styles from "./Button.module.css";

const Button = ({label, primary, type, size, ...props}) => {
  const { className, children, ...restProps} = props;   
  const classes = mergeClassNames(styles.root, {  
    [styles.primaryColor]: primary,
    [styles.secondaryColor]: !primary,
    [styles.smallSize]: size === "small",
    [styles.mediumSize]: size === "medium",
    [styles.largeSize]: size === "large",
  }, className);

  return (
    <button className={classes} type={type} {...restProps} >
      <Label>{label || children}</Label>
    </button>
  );
};

Button.propTypes = {  
  label: PropTypes.string,
  primary: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Button.defaultProps = {
  primary: false,
  type: "button",
  size: "medium"
};

export default Button;
