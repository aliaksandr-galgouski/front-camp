import React from "react";
import PropTypes from "prop-types";
import mergeClassNames from "classnames";

import styles from "./Container.module.css";

const Container = ({tag, fixed, ...props}) => {
  const Tag = tag;
  const { className, ...restProps} = props;
  const classes = mergeClassNames(styles.root, {
    [styles.fixed]: fixed
  }, className);

  return <Tag className={classes} {...restProps} />;
}

Container.propTypes = {  
  tag: PropTypes.string.isRequired,
  fixed: PropTypes.bool,
};

Container.defaultProps = {
  tag: "div",
  fixed: false,
}

export default Container;
