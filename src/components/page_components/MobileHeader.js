import React from "react";
import { NavLink, activeStyle} from 'react-router-dom';

import styles from "../../assets/style_modules/MobileHeader.module.css";
import logo from "../../assets/images/CrocodileSolo.png";

export default function Header() {
  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <div className={styles["mobileTitle"]}>THE</div>
        <img src={logo} className={styles["image"]}></img>
        <div className={styles["mobileTitle"]}>CROCODILE</div>
        <br />
        {/* <Login /> */}
      </div>
    </div>
  );
}
