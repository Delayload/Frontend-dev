import React from "react";
import styles from "./styles.module.scss";
import LogoIndex from "../../img/compass-development-logo.png";

function Intro() {
  return (
    <article className={styles.intro}>
      <img src={LogoIndex} alt="Compass development logo" />
    </article>
  );
}

export default Intro;
