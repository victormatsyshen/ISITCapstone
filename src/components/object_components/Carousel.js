
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import dummy from "../../db/data.json";
import Card from "../object_components/Card";
import MobileCard from "./MobileCard";
import { variables } from "../../firebase/Variables";
import styles from "../../assets/style_modules/Carousel.module.css";
import '../../assets/styles/mainCard.css'
import SwipeableViews from 'react-swipeable-views';


function Carousel() {

  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get('id');


  const [post, setPosts] = useState([])


  useEffect(() => {
    fetch(variables.API_URL + 'item')
      .then(response => response.json())
      .then(resp => setPosts(resp))

  }, [])

  // flip card
  const [flip, setFlip] = useState(false);

  function flipCard() {
    setFlip(!flip)

    if (flip) { console.log("Filp"); }
    else { console.log("No"); }
  }

  // create a carousel that is responsive to the total number of images included
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    //console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);


  return (
    <div className={styles['wrapper']}>
      {/* <motion.h1 animate={{ x: 250 }}></motion.h1> */}
      <motion.div ref={carousel} className={styles['carousel']} whileTap={{ cursor: "grabbing" }}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width}}
          className={styles['inner-carousel']}
          
        >
          {post.map((post) => {
            return (
              <motion.div className={styles['item']}>
                {/* <img src={post.Image_url} alt="" /> */}
                <Card
                  key={post.Item_ID}
                  {...post}
                  flipCard={flipCard}
                  //image={card.image}
                // backImageSrc={testguitars}
                />
              </motion.div>
            );
            
          })}
        </motion.div>
      </motion.div>
    </div>

    // <div className="card-grid">

    //     <div className={`card ${flip ? "flip" : ""}`}>

    //         <div className="front" onClick={flipCard}>

    //             <div className='cardImage'>
    //                 {
    //                 post.map(post => <img src={post.Image_url} className='image'/>) 
    //                 }
    //             </div>

    //             <div className='cardHeader'>
    //                 <div className='headerInfo'>
    //                     {
    //                         post.map(post=><div>{` ${post.Item_name}`}</div>)
    //                     }
    //                 </div>
    //             </div>
    
    //             <div className='cardFooter'>
    //                 <div className='footerInfo'> 
    //                     <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
    //                     {/* {
    //                         post.map(post=><div>{` ${post.Item_narrative}`}</div>)
    //                     } */}
    //                 </div>
    //             </div>
                
    //         </div>

    //         <div className="back" onClick={flipCard}>
               

    //            <div className='cardBackHeaderImage'>
    //                 {
    //                     post.map(post => <img src={post.Image_url} className='backHeaderImage'/>) 
    //                 }
    //             </div>

    //             <div className="backInfo">

    //                 {
    //                     post.map(post=><div className='backHeader'>{` ${post.Item_name}`}</div>)
    //                 }

    //                 {
    //                     post.map(post=><div>{`${post.Item_narrative}`}</div>)
    //                 }
    //                 <br/>

    //                 <SwipeableViews enableMouseEvents>
    //                     <div className='slide, slide1'>
    //                         <p>Picture 1</p>
    //                         {
    //                         post.map(post => <img src={post.Image_url} className='sliderImage'/>) 
    //                         }
    //                     </div>

    //                     <div className='slide, slide2'>
    //                         <p>Picture 2</p>
    //                         {
    //                         post.map(post => <img src={post.Image_url} className='sliderImage'/>) 
    //                         }
    //                     </div>

    //                     <div className='slide, slide3'>
    //                         <p>Picture 3</p>
    //                         {
    //                         post.map(post => <img src={post.Image_url} className='sliderImage'/>) 
    //                         }
    //                     </div>

    //                 </SwipeableViews>

    //                 {
    //                     post.map(post=><div>{`Maker: ${post.Maker}`}</div>)
    //                 }
    //                 <br/>
    //                 {
    //                     post.map(post=><div>{`Collector: ${post.Collector}`}</div>)
    //                 }
    //                 <br/>
    //                 {
    //                     post.map(post=><div>{`Condition: ${post.Condition}`}</div>)
    //                 }
    //                 <br/>
    //                 {
    //                     post.map(post=><div>{`Material: ${post.Material}`}</div>)
    //                 }
    //                 <br/>
    //                 {
    //                     post.map(post=><div>{`Size_Dimensions: ${post.Size_Dimension_Weight}`}</div>)
    //                 }
    //                 <br/>
    //                 {
    //                     post.map(post=><div>{`Provenance: ${post.Provenance}`}</div>)
    //                 }
    //                 <br/>
    //                 {
    //                     post.map(post=><div>{`Cross_referances: ${post.Cross_references}`}</div>)
    //                 }
    //                 <br/>

    //             </div>

                
    

    //             {/* <br />
    //             <div className={styles['container']}>
    //                 <ul className={styles['navLinks']}>
    //                     <li><a href="/map">Map</a></li>
    //                     <li><a href="/qr">QR</a></li>
    //                 </ul>
    //             </div> */}
                
    //         </div>
    //     </div>

    // </div>
  );
}

export default Carousel;
