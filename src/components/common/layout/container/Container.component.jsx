import React from "react";
import { mergeClasses } from "components/helpers/style.helper";

import styles from "./Container.module.scss";

const Container = ({tag = "div", fixed = false, ...props}) => {
  const Tag = tag;
  const { className, ...restProps} = props;
  const classes = mergeClasses(styles.root, {
    [styles.fixed]: fixed
  }, className);

  return <Tag className={classes} {...restProps} />;
}

export default Container;
