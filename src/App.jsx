import React from "react";
import "./App.scss";
import "./assets/global.scss";
import PageHeader from "./components/page-header";
import Intro from "./components/intro";
import Contacts from "./components/contacts";
import Card from "./components/booking-card";
import img1 from "./img/bitmap.jpg";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Intro />
      <Contacts />
      <Card
        src={img1}
        adress="Якиманка, ул. Большая Полянка"
        name="Полянка/44"
        description="Садовые Кварталы — жилой комплекс в Хамовниках. На территории — четыре жилых квартала, двухуровневая торговая галерея, школа, парк и большой пруд."
      />
      <Card
        src={img1}
        adress="Хамовники, ул. Ефремова"
        name="Садовые Кварталы"
        description="Садовые Кварталы — жилой комплекс в Хамовниках. На территории — четыре жилых квартала, двухуровневая торговая галерея, школа, парк и большой пруд."
      />
      <Card
        src={img1}
        adress="Басманный, ул. Нижняя Красносельская"
        name="TriBeCa Apartments"
        description="TriBeCa Apartments — это жилой комплекс с квартирами премиум и бизнес-класса. Корпуса спроектированы в стиле ар-деко и похожи на здания Нью-Йорка."
      />
    </div>
  );
}

export default App;
