import React from "react";
import { mergeClasses } from "components/helpers/style.helper.js";

import styles from "./Label.module.scss";

const Label = ({tag: Tag = "span", text = "", size, color, ...props}) => {
  const { className, style, children, ...restProps} = props;
  const classes = mergeClasses(styles.root, className);

  const newStyle = {};
  if(size){
    newStyle["fontSize"] = size;
  }
  if(color){
    newStyle["color"] = size;
  }
  
  return (
    <Tag className={classes} style={{...newStyle, ...style}} {...restProps} >
      {text || children}
    </Tag>
  );
};  

export default Label;