import React from 'react';
import styles from "../styles/Header.module.css";
import Login from './Login';
import logo from "../images/crocLogo.png"

export default function Header() {
  return (
    <div className={styles['container']}>

      <div className={styles['header']}>
      <img src={logo} className={styles['image']}></img>
      {/* <Login /> */}
      </div>
    </div>
    
  )
}
