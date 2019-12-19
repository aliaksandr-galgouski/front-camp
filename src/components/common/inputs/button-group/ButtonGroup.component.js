import React from "react";
import mergeClassNames from "classnames";

import {Block} from "components/common/layout";
import styles from "./ButtonGroup.module.css";

const ButtonGroup = props => {
  const {className, ...restProps} = props;
  const classes = mergeClassNames(styles.root, className);
  return <Block inline flex className={classes} {...restProps} />;
}

export default ButtonGroup;
