import React from "react";
import styles from "./styles.module.scss";
import MainNav from "./main-nav";
import Logo from "../../img/compass-logo.svg";

function PageHeader() {
  return (
    <header className={styles.pageHeader}>
      <div className={styles.wrap}>
        <a className={styles.logo} href="-">
          <img src={Logo} alt="Compass" />
        </a>
        <MainNav />
      </div>
    </header>
  );
}

export default PageHeader;
