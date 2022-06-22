import React, { useEffect, useState } from "react";
import { variables } from "../../firebase/Variables";
import "../../assets/styles/mainCard.css";
import styles from "../../assets/style_modules/MobileNav.module.css";
import card_styles from "../../assets/style_modules/MobileCard.module.css";
import SwipeableViews from "react-swipeable-views";

export default function MobileCard() {
  const [flip, setFlip] = useState(false);

  function flipCard() {
    setFlip(!flip);

    if (flip) {
      console.log("Front");
    } else {
      console.log("Back");
    }
  }

  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");
  // const id = 1;

  const [post, setPosts] = useState([]);

  useEffect(() => {
    fetch(variables.API_URL + "item" + "/" + parseInt(id))
      .then((response) => response.json())
      .then((resp) => setPosts(resp));
  }, []);

  return (
    <div className="card-grid">
      <div className={`card ${flip ? "flip" : ""}`}>
        <div className="front" onClick={flipCard}>
          <div className="cardImage">
            {post.map((post) => (
              <img src={post.Image_url1} className="image" />
            ))}
          </div>

          <div className="cardHeader">
            <div className="headerInfo">
              {post.map((post) => (
                <div>{` ${post.Item_name}`}</div>
              ))}
            </div>
            {/* <div className="footerInfo">
              <div>{<h3> Click to flip card &#128070; </h3>}</div>
            </div> */}
          </div>
        </div>

        <div className="back" onClick={flipCard}>
        <div className='cardBackHeaderImage'>
                    {
                        post.map(post => <img src={post.Image_url1} className='backHeaderImage'/>) 
                    }
                </div>

                <div className="backInfo">

                    {
                        post.map(post=><div className='backHeader'>{` ${post.Item_name}`}</div>)
                    }

                    <SwipeableViews enableMouseEvents>
                        <div className='slide, slide1'>
                            {
                            post.map(post => <img src={post.Image_url2} className='sliderImage'/>) 
                            }
                        </div>

                        <div className='slide, slide2'>
                            {
                            post.map(post => <img src={post.Image_url3} className='sliderImage'/>) 
                            }
                        </div>

                        <div className='slide, slide3'>
                            {
                            post.map(post => <img src={post.Image_url4} className='sliderImage'/>) 
                            }
                        </div>

                    </SwipeableViews>

                    <div className="backTextWrapper">
                        <div className="infoHeader">Information</div>
                        {
                            post.map(post=><div>{`${post.Item_narrative}`}</div>)
                        }
                        <br/>
                        <div className="infoHeader">Maker</div>
                        {
                            post.map(post=><div>{`${post.Maker}`}</div>)
                        }
                        <br/>
                        <div className="infoHeader">Collector</div>
                        {
                            post.map(post=><div>{`${post.Collector}`}</div>)
                        }
                        <br/>
                        <div className="infoHeader">Condition</div>
                        {
                            post.map(post=><div>{`${post.Condition}`}</div>)
                        }
                        <br/>
                        <div className="infoHeader">Material</div>
                        {
                            post.map(post=><div>{`${post.Material}`}</div>)
                        }
                        <br/>
                        <div className="infoHeader">Size Dimensions</div>
                        {
                            post.map(post=><div>{`${post.Size_Dimension_Weight}`}</div>)
                        }
                        <br/>
                        <div className="infoHeader">Provenance</div>
                        {
                            post.map(post=><div>{`${post.Provenance}`}</div>)
                        }
                        <br/>
                        <div className="infoHeader">Cross Referances</div>
                        {
                            post.map(post=><div>{`${post.Cross_references}`}</div>)
                        }
                        <br/>

                    </div>
          </div>

          {/* <br />
                <div className={styles['container']}>
                    <ul className={styles['navLinks']}>
                        <li><a href="/map">Map</a></li>
                        <li><a href="/qr">QR</a></li>
                    </ul>
                </div> */}
        </div>
      </div>
      <div className="flip-info">
        {/* <h3> * Click to flip card &#128070; *</h3> */}
      </div>
    </div>
  );
}
