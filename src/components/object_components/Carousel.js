
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import dummy from "../../db/data.json";
import Card from "../object_components/Card";
import { variables } from "../../firebase/Variables";
import styles from "../../assets/style_modules/Carousel.module.css";


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
      {/* <motion.h1 animate={{ x: 250 }}>hello</motion.h1> */}
      <motion.div ref={carousel} className={styles['carousel']} whileTap={{ cursor: "grabbing" }}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
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
  );
}

export default Carousel;
