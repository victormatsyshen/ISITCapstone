import "../styles/Carousel.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import dummy from "../db/data.json";
import Card from "../components/Card.js";
import { variables } from "../Variables";


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
    <div className="wrapper">
      {/* <motion.h1 animate={{ x: 250 }}>hello</motion.h1> */}
      <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {post.map((post) => {
            return (
              <motion.div className={`{card ${flip ? "flip" : ""}} item`}>
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