import React from 'react';
import styles from "../../assets/style_modules/MobileHeader.module.css";
import Login from '../object_components/Login';
import logo from "../../assets/images/CrocodileSolo.png"

export default function Header() {

  return (
    <div className={styles['container']}>

      <div className={styles['header']}>
        <div className={styles['title']}>THE</div> 
        <img src={logo} className={styles['image']}></img> 
        <div className={styles['title']}>CROCODILE</div><br/>
        {/* <Login /> */}
      </div>
    </div>
    
  )
}
