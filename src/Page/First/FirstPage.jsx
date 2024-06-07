import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import styles from "./First.module.css";

const FirstPage = () => {
  return (
    <div className={styles.bgPageFirst}>
      <NavBar></NavBar>
      <Hero></Hero>
    </div>
  );
};

export default FirstPage;
