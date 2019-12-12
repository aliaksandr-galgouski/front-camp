import React from "react";
import { Label } from "../../layout";
import { mergeClasses } from "components/helpers/style.helper.js";

import styles from "./Button.module.scss";


const Button = ({label, primary = false, type = "button", size="medium", ...props}) => {
  const { className, children, ...restProps} = props;   
  const classes = mergeClasses(styles.root, {  
    [styles.primaryColor]: primary,
    [styles.secondaryColor]: !primary,
    [styles.smallSize]: size === "small",
    [styles.mediumSize]: size === "medium",
    [styles.largeSize]: size === "large",
  }, className);

  return (
  <button className={classes} type={type} {...restProps} >
    <Label text={label || children}></Label>
  </button>)
};

export default Button;