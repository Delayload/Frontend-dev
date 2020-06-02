import React from "react";
import styles from "./styles.module.scss";
import MainNav from "./main-nav";
import Logo from "../../img/compass-logo.svg";

function PageHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <a className={styles.logo} href=" ">
          <img src={Logo} alt="Compass" width="179px" height="24px" />
        </a>
        <MainNav />
      </div>
    </div>
  );
}

export default PageHeader;
