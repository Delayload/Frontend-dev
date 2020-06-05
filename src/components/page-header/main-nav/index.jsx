import React from "react";
import styles from "./styles.module.scss";
import "../../../assets/variables.scss";
import "../../../assets/mixins.scss";

function MainNav() {
  return (
    <nav className={styles.navigation}>
      <a className={styles.item} href="-">
        Купить
      </a>
      <a className={styles.item} href="-">
        Снять
      </a>
      <a className={styles.item} href="-">
        Наши агенты
      </a>
    </nav>
  );
}

export default MainNav;
