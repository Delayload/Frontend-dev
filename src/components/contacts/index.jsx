import React from "react";
import styles from "./styles.module.scss";

function Contacts() {
  return (
    <section className={styles.container}>
      <div className={styles.wrap}>
        <h3 className={styles.header}>Discover Our New Developments</h3>
        <p className={styles.description}>
          Compass brings a modern approach to new development marketing and
          sales. From boutique rental conversions to luxurious ground-up
          condominiums, browse our portfolio of current offerings.
        </p>
        <button className={styles.button} type="button">
          Contact The Team
        </button>
      </div>
    </section>
  );
}

export default Contacts;
