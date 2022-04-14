import React, { useState } from 'react'
import '../styles/swipe.css'
import testguitars from '../images/testguitars.png'
import styles from "../styles/Nav.module.css";

export default function Swipe() {

    const [flip, setFlip] = useState(false);


    function flipCard() {
        setFlip(!flip)

        if(flip){console.log("Filp");}
        else{console.log("No");}
    }

  return (  
    <div className="card-grid">

        <div className={`card ${flip ? "flip" : ""}`}>

            <div className="front" onClick={flipCard}>

                <div className='cardHeader'>
                    <div className='headerInfo'>
                        Guitar Wall
                    </div>
                </div>
    
                <div className='cardImage'>
                    <img src={testguitars} className='image'></img>
                </div>
    
                <div className='cardFooter'>
                    <div className='footerInfo'> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <p>Swipe For More Info</p>
                    </div>
                </div>
                
            </div>

            <div className="back" onClick={flipCard}>
               <h2>This is the back</h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Swipe Down for more info.</p>
                <br/>
                <img src={testguitars} className='image2'></img>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                <br />
                <div className={styles['container']}>
                    <ul className={styles['navLinks']}>
                        <li><a href="/map">Map</a></li>
                        <li><a href="/qr">QR</a></li>
                    </ul>
                </div>
                
            </div>
        </div>

    </div>
  )
}
