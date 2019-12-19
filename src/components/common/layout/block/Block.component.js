import React from "react";
import PropTypes from "prop-types";
import mergeClassNames from "classnames";

import styles from "./Block.module.css";

const Block = ({tag, flex, inline, ...props}) => {
  const Tag = tag
  const {className, ...restProps} = props;
  const classes = mergeClassNames(
    flex 
      ? inline 
        ? styles.inlineFlexBlock : styles.flexBlock
      : inline 
        ? styles.inlineBlock : styles.block,
    className
  );

  return (<Tag className={classes} {...restProps} />)
};

Block.propTypes = {  
  tag: PropTypes.string.isRequired,
  flex: PropTypes.bool,
  inline: PropTypes.bool,
};

Block.defaultProps = {
  tag: "div",
  flex: false,
  inline: false,
}

export default Block;
