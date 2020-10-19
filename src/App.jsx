import React from "react";
import "./App.scss";
import "./assets/global.scss";
import "./assets/variables.scss";
import "./assets/mixins.scss";
import "./assets/fonts.scss";
import PageHeader from "./components/page-header";
import Intro from "./components/intro";
import Contacts from "./components/contacts";
import CardsList from "./components/CardsList";
import Footer from "./components/page-footer";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Intro />
      <Contacts />
      <CardsList />
      <Footer />
    </div>
  );
}

export default App;
