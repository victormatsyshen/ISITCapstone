import React from "react";
import styles from "../../assets/style_modules/Card.module.css";


export default function Card({
    flipCard, // action to handle flipping of card
    Item_name,
    Item_narrative,
    Item_type,
    Image_url1,
    Maker,
    Collector,
    QR_Code
    // frontImageSrc, // front image source
    // backImageSrc // back image source
}) {
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['card-container']}>

                    <div className={styles['card']}>

                        <figure className={styles['front']} onClick={flipCard}>
                            <img src={Image_url1} />
                            <div className={styles['itemHeader']}>{Item_name}</div>
                        </figure>

                        <figure className={styles['back']} onClick={flipCard}>
                            <div className={styles['backBlurWrapper']}>
                                <img src={Image_url1} className={styles['backBlurImage']} />
                                <div className={styles['backHeader']}>{Item_name}</div>
                            </div>
                            <div className={styles['backContent']}>
                                <br/>
                                <div className={styles['backItemHeader']}>Information</div>
                                {Item_narrative}
                                <br/><br/><br/>
                                <div className={styles['backItemHeader']}>Type</div>
                                {Item_type}
                                <br/><br/><br/>
                                <div className={styles['backItemHeader']}>Maker</div>
                                {Maker}
                                <br/><br/><br/>
                                <div className={styles['backItemHeader']}>Collector</div>
                                {Collector}
                                <br/><br/><br/>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}
