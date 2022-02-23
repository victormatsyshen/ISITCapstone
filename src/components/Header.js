import React from 'react';
import styles from "../styles/Header.module.css";
import Login from './Login';

export default function Header() {
  return (
    <div className={styles['container']}>

      <div className={styles['header']}>Header
      <Login />
      </div>
    </div>
    
  )
}
