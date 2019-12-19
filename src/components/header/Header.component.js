import React from "react";

import { Block } from "components/common/layout";
import Logo from "components/logo";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <Block className={styles.root}>
      <Block>
        <Logo/>
      </Block>
      <Block flex>
        {/* <SearchForm/> */}
      </Block>                   
    </Block>
  );
};

export default Header;
