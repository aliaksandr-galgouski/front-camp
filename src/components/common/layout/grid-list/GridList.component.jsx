import React from "react";
import { mergeClasses } from "components/helpers/style.helper.js";

import styles from "./GridList.module.scss";

const GridList = ({tag: Tag = "ul", columnCount = 1, columnGap = 0, rowGap = 0, ...props}) => {
  const { className, style, ...restProps} = props;
  const classes = mergeClasses(styles.root, className);
  const newStyle = {    
    gridRowGap: rowGap,
    gridColumnGap: columnGap,
    padding: `${rowGap} ${columnGap}`,
    gridTemplateColumns: Array(+columnCount).fill("auto").join(" "),
    ...style
  };
  
  return <Tag className={classes} style={newStyle} {...restProps} />;
};  

export default GridList;