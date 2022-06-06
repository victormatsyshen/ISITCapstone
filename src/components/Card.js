import React from "react";
import "../styles/Card.css";

export default function Card({
    flipCard, // action to handle flipping of card
    Item_name,
    Item_narrative,
    Item_type,
    Image_url,
    QR_Code
    // frontImageSrc, // front image source
    // backImageSrc // back image source
}) {
    return (
        <>
            <div className="container">
                <div className="card-container">
                    <div className="card">
                        <figure className="front" onClick={flipCard}>
                            {/* <img src={frontImageSrc} className="guitar" alt="Image 1" /> */}
                            <img src={Image_url} />
                            <h1>{Item_name}</h1>
                            <h2>{Item_type}</h2>
                        </figure>

                        <figure className="back" onClick={flipCard}>
                            {/* <img src={backImageSrc} className='image2'></img> */}
                            <p>{Item_narrative}</p>

                            <br />

                            <ul className="links">
                                <li><a href="/map">Map</a></li>
                                <li><a href={QR_Code}>QR</a></li>
                            </ul>
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}
