import React from "react";
import propTypes from "prop-types";
import styles from "./styles.module.scss";

function Card({ src, adress, name, description }) {
  return (
    <a href=" " className={styles.container}>
      <img src={src} alt="" width="491" height="350" />
      <div className={styles.content}>
        <p className={styles.adress}>{adress}</p>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </a>
  );
}
Card.propTypes = {
  src: propTypes.string.isRequired,
  adress: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};
export default Card;
