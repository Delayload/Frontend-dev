import React from "react";
import propTypes from "prop-types";
import styles from "./styles.module.scss";

function InfoItem({ name, list }) {
  return (
    <div className={styles.infoList}>
      <h4 className={styles.infoHeader}>{name}</h4>
      <ul>
        {list.map((link) => {
          let linkclass = "";

          if (link.all) {
            linkclass = styles.infoItemAll;
          } else {
            linkclass = styles.infoItem;
          }
          return (
            <li key={link.id}>
              <a href={link.href} className={linkclass}>
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

InfoItem.propTypes = {
  name: propTypes.string.isRequired,
  list: propTypes.arrayOf(Object).isRequired,
};
export default InfoItem;
