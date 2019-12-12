import React from "react";
import { mergeClasses } from "components/helpers/style.helper.js";

import styles from "./Block.module.scss";

const Block = ({tag: Tag = "div", flex = false, inline = false, ...props}) => {
  const { className, ...restProps} = props;
  const classes = mergeClasses(
    flex 
      ? inline 
        ? styles.inlineFlexBlock : styles.flexBlock
      : inline 
        ? styles.inlineBlock : styles.block,
    className
  );

  return (<Tag className={classes} {...restProps} />)
};

export default Block;