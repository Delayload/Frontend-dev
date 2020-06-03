import React from "react";
import styles from "./styles.module.scss";

function Footer() {
  return (
    <section className={styles.container}>
      <div className={styles.wrap}>
        <section className={styles.props}>
          <h4 className={styles.name}>ООО «Ярд»</h4>
          <p className={styles.regnumber}>ОГРН 1175074002531</p>
          <p className={styles.identnumber}>ИНН 5036165365</p>
          <p className={styles.telephone}>+7 (999) 821-14-88</p>
        </section>
        <div className={styles.info}>
          <section className={styles.complexes}>
            <h5 className={styles.complexesHeader}>Жилые комплексы</h5>
            <ul>
              <li>
                <a href=" ">ВТБ Арена Парк</a>
              </li>
              <li>
                <a href=" ">Садовые кварталы</a>
              </li>
              <li>
                <a href=" ">Резиденция Монэ</a>
              </li>
            </ul>
            <a href=" ">Все ЖК Москвы</a>
          </section>
          <section className={styles.about}>about</section>
          <p className={styles.copyright}>
            Любая информация, представленная на данном сайте, носит
            исключительно информационный характер и ни при каких условиях не
            является публичной офертой, определяемой положениями статьи 437 ГК
            РФ. © ООО «Ярд», 2017
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
