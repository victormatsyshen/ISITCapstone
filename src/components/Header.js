import React from 'react';
import styles from "../styles/Header.module.css";
import logo from "../images/crocLogo.png"
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div className={styles['container']}>

      <div className={styles['header']}>
      <Link to="/"><img src={logo} className={styles['image']}></img></Link>
      </div>
    </div>
    
  )
}
