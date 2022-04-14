import React from 'react'
import styles from '../styles/Card.module.css'
import testguitars from '../images/testguitars.png'
import Swipe from './Swipe'

export default function Card() {

    // const [flip, setFlip] = useState(false);

    // function flipCard() {
    //     setFlip(!flip)

    //     if(flip){console.log("Filp");}
    //     else{console.log("No");}
    // }

    return (
        <div className={styles['cardContainer']}>
            <div className={styles['card2']}>
    
                <div className={styles['cardHeader']}>
                    <div className={styles['headerInfo']}>
                        Guitar Wall
                    </div>
                </div>
    
                <div className={styles['cardImage']}>
                    <img src={testguitars} className={styles['image']}></img>
                </div>
    
                <div className={styles['cardFooter']}>
                    <div className={styles['footerInfo']}> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
    
            </div>
            <Swipe />
        </div>
    )

    //   return (
    //     <div className={styles['cardContainer']}>
    //         <div className={styles['card2']}>

    //             <div className={styles['cardHeader']}>
    //                 <div className={styles['headerInfo']}>
    //                     Guitar Wall
    //                 </div>
    //             </div>

    //             <div className={styles['cardImage']}>
    //                 <img src={testguitars} className={styles['image']}></img>
    //             </div>

    //             <div className={styles['cardFooter']}>
    //                 <div className={styles['footerInfo']}> 
    //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    //                 </div>
    //             </div>

    //         </div>
    //         <Swipe />
    //     </div>
    //   )

}
