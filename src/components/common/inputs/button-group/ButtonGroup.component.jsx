import React from "react";
import Block from "components/common/layout/block/Block.component";
import { mergeClasses } from "components/helpers/style.helper";

import styles from "./ButtonGroup.module.scss";

const ButtonGroup = props => {
  const {className, ...restProps} = props;
  const classes = mergeClasses(styles.root, className);
  return <Block inline flex className={classes} {...restProps} />;
}

export default ButtonGroup;
