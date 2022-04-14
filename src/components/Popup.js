import React from 'react'
import styles from "../styles/Popup.module.css";

export default function Popup() {

    function sayHello() {
        console.log("ok: " + console.dir());
        this.className='container2';
        //this.className='container2';
    }

  return (
    <div className={styles['container']}>
        <button className={styles['content']} onClick={sayHello}>Hello</button>
    </div>
  )
}
