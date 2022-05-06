import React, { useState } from 'react';
import '../styles/swipe.css';
import testguitars from '../images/testguitars.png';
import guitar from '../images/guitar.jpg';
import drumsticks from '../images/drumsticks.jpg';
import poster1 from '../images/poster1.jpg';
import lp2 from '../images/lp2.jpg';
import poster2 from '../images/poster2.jpg';
import lp from '../images/lp.jpg';
import styles from "../styles/Nav.module.css";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import dummy from "../db/data.json"
import Card from './Card'

export default function Swipe() {
    const [flip, setFlip] = useState(false);

    function flipCard() {
        setFlip(!flip)

        if (flip) { console.log("Filp"); }
        else { console.log("No"); }
    }
    return (
        <Splide
            options={{
                perPage: 5,
                //perMove: 1,
                type: 'slide',
                focus: 0,
                //drag: 'free',
                //type: 'loop',
                //snap: true,
                pagination: 'slider',
                dragMinThreshold: 30,
                //autoWidth: false,
                updateOnMove: true,
                heightRatio: 1.5,
                gap: '0em',
                breakpoints: {
                    991: {
                        // Tablet
                    },
                    767: {
                        // Mobile Landscape
                        perPage: 2,

                    },
                    479: {
                        // Mobile Portrait
                        perPage: 1,

                    }
                }
            }}
            hasTrack={false} aria-label="My Images">
            <div className="wrapper">
                <SplideTrack className="splide__track">
                    <SplideSlide className="splide__slide">
                            {dummy.cards.map((card) => (
                                <div className={`card ${flip ? "flip" : ""}`}>
                                    <Card
                                        key={card.id}
                                        {...card}
                                        flipCard={flipCard}
                                        frontImageSrc={guitar}
                                        backImageSrc={testguitars}
                                    />
                                </div>
                            ))}
                    </SplideSlide>
                </SplideTrack>
            </div>
        </Splide>


    )
}
                    {/* <SplideSlide>
                        <ul className='card_front'>
                            {dummy.front.map(fr => (
                                <li key={fr.id}> Card {fr.artistName} </li>
                            ))}
                        </ul>
                    </SplideSlide> */}

/**
 * 
 * 1. Make card flip for just one card
 *  - Do not use single boolean for flip state for all cards
 * 2. Make cards align in a row
 *  - use flexbox at a container level of cards not on the card
 * 3. Host images somewhere, and include URL path to image as part of dummy data
 *  - Add fields frontImageSrc, backImageSrc as part of cards object in data
 * 
 */