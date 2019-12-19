import React from "react";

import {Block} from "components/common/layout";
import Logo from "components/logo";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Block flex className={styles.root}>
      <Logo/>
    </Block>
  );
};

export default Footer;
