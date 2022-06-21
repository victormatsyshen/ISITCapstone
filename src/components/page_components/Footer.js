import React from "react";
import styles from "../../assets/style_modules/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles["footerContainer"]}>
      <div className={styles["footer"]}>
        <div className={styles["footerText"]}>
          The Crocodile &copy; 2022 <br/><br />
          Visit <a href="https://www.thecrocodile.com" className={styles["footerLink"]}>The Crocodile Family</a> website for Info and Events.<br/><br />
          Project Created By: Devon Rice - Dylan York - May Gaeul Kwon - Oscar Cruz - Ryan Luu - Victor Matsyshen
        </div>
      </div>
    </div>
  );
}
