import React from "react";
import PropTypes from "prop-types";
import mergeClassNames from "classnames";

import styles from "./Label.module.css";

const Label = ({tag = "span", text = "", size, color, ...props}) => {
  const Tag = tag;
  const { className, style, children, ...restProps} = props;
  const classes = mergeClassNames(styles.root, className);

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

Label.propTypes = {  
  tag: PropTypes.string.isRequired,
  text: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string 
};

Label.defaultProps = {
  tag: "span",
  text: "",
};

export default Label;
