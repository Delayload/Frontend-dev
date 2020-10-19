import React from "react";
import styles from "./styles.module.scss";
import InfoItem from "./infoItem";

function Footer() {
  const infoList = [
    {
      id: 1,
      name: "Жилые комплексы",
      list: [
        {
          id: 1,
          name: "ВТБ Арена Парк",
          href: "-",
          all: false,
        },
        {
          id: 2,
          name: "Садовые кварталы",
          href: "-",
          all: false,
        },
        {
          id: 3,
          name: "Резиденция Монэ",
          href: "-",
          all: false,
        },
        {
          id: 4,
          name: "Все ЖК Москвы",
          href: "-",
          all: true,
        },
      ],
    },
    {
      id: 2,
      name: "Компания",
      list: [
        {
          id: 1,
          name: "Команда",
          href: "-",
          all: false,
        },
        {
          id: 2,
          name: "О компании",
          href: "-",
          all: false,
        },
      ],
    },
  ];

  return (
    <footer className={styles.pageFooter}>
      <div className={styles.wrap}>
        <section className={styles.props}>
          <h4 className={styles.name}>ООО «Ярд»</h4>
          <p className={styles.regnumber}>ОГРН 1175074002531</p>
          <p className={styles.identnumber}>ИНН 5036165365</p>
          <p className={styles.telephone}>+7 (999) 821-14-88</p>
        </section>
        <div className={styles.info}>
          {infoList.map((element) => {
            return (
              <InfoItem
                key={element.id}
                name={element.name}
                list={element.list}
              />
            );
          })}
          <p className={styles.copyright}>
            Любая информация, представленная на данном сайте, носит
            исключительно информационный характер и ни при каких условиях не
            является публичной офертой, определяемой положениями статьи 437 ГК
            РФ. © ООО «Ярд», 2017
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
