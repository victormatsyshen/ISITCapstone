import React from "react";
import styles from '../assets/style_modules/HomePage.module.css'
import Carousel from "../components/object_components/Carousel";

export default function HomePage() {
  return (
    <div className={styles["homeContainer"]}>
      <Carousel />
    </div>
  );
}
