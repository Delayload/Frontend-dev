import React from "react";
import propTypes from "prop-types";
import styles from "./styles.module.scss";

function Card({ src, address, name, description, alt }) {
  return (
    <a href="-" className={styles.cardContainer}>
      <img src={src} alt={alt} />
      <div className={styles.content}>
        <p className={styles.address}>{address}</p>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </a>
  );
}
Card.propTypes = {
  src: propTypes.string.isRequired,
  address: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
};
export default Card;
