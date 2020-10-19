import React from "react";
import img1 from "../../img/bitmap.jpg";
import Card from "./Card";
import styles from "./styles.module.scss";

function CardList() {
  const cardsList = [
    {
      id: 1,
      img: img1,
      address: "Якиманка, ул. Большая Полянка",
      name: "Полянка/44",
      description:
        "Садовые Кварталы — жилой комплекс в Хамовниках. На территории — четыре жилых квартала, двухуровневая торговая галерея, школа, парк и большой пруд.",
      alt: "Якиманка",
    },
    {
      id: 2,
      img: img1,
      address: "Хамовники, ул. Ефремова",
      name: "Садовые Кварталы",
      description:
        "Садовые Кварталы — жилой комплекс в Хамовниках. На территории — четыре жилых квартала, двухуровневая торговая галерея, школа, парк и большой пруд.",
      alt: "Хамовники",
    },
    {
      id: 3,
      img: img1,
      address: "Басманный, ул. Нижняя Красносельская",
      name: "TriBeCa Apartments",
      description:
        "TriBeCa Apartments — это жилой комплекс с квартирами премиум и бизнес-класса. Корпуса спроектированы в стиле ар-деко и похожи на здания Нью-Йорка.",
      alt: "Басманный",
    },
  ];

  return (
    <section className={styles.cardsList}>
      {cardsList.map((element) => {
        return (
          <Card
            key={element.id}
            src={element.img}
            address={element.address}
            name={element.name}
            description={element.description}
            alt={element.alt}
          />
        );
      })}
    </section>
  );
}
export default CardList;
