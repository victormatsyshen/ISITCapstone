import React,{useEffect, useState} from "react";
import { variables } from "../../firebase/Variables";
import '../../assets/styles/mainCard.css'
import styles from "../../assets/style_modules/MobileNav.module.css";
import card_styles from "../../assets/style_modules/MobileCard.module.css";
import SwipeableViews from 'react-swipeable-views';

export default function MobileCard() {

    const [flip, setFlip] = useState(false);

    function flipCard() {
        setFlip(!flip)

        if(flip){console.log("Front");}
        else{console.log("Back");}
    }

    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
    // const id = 1;   
    

    const [post,setPosts]=useState([])


    useEffect(()=> {
        fetch(variables.API_URL+'item'+'/'+ parseInt(id))
        .then(response=>response.json())
        .then(resp=>setPosts(resp))

    },[])
    
    return (  
    <div className="card-grid">

        <div className={`card ${flip ? "flip" : ""}`}>

            <div className="front" onClick={flipCard}>

                <div className='cardImage'>
                    {
                    post.map(post => <img src={post.Image_url1} className='image'/>) 
                    }
                </div>

                <div className='cardHeader'>
                    <div className='headerInfo'>
                        {
                            post.map(post=><div>{` ${post.Item_name}`}</div>)
                        }
                    </div>
                </div>
    
                <div className='cardFooter'>
                    <div className='footerInfo'> 
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                        {/* {
                            post.map(post=><div>{` ${post.Item_narrative}`}</div>)
                        } */}
                    </div>
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
                            <p>Picture 1</p>
                            {
                            post.map(post => <img src={post.Image_url2} className='sliderImage'/>) 
                            }
                        </div>

                        <div className='slide, slide2'>
                            <p>Picture 2</p>
                            {
                            post.map(post => <img src={post.Image_url1} className='sliderImage'/>) 
                            }
                        </div>

                        <div className='slide, slide3'>
                            <p>Picture 3</p>
                            {
                            post.map(post => <img src={post.Image_url1} className='sliderImage'/>) 
                            }
                        </div>

                    </SwipeableViews>

                    <div className="backTextWrapper">

                        {
                            post.map(post=><div>{`${post.Item_narrative}`}</div>)
                        }
                        <br/>
                        {
                            post.map(post=><div>{`Maker: ${post.Maker}`}</div>)
                        }
                        <br/>
                        {
                            post.map(post=><div>{`Collector: ${post.Collector}`}</div>)
                        }
                        <br/>
                        {
                            post.map(post=><div>{`Condition: ${post.Condition}`}</div>)
                        }
                        <br/>
                        {
                            post.map(post=><div>{`Material: ${post.Material}`}</div>)
                        }
                        <br/>
                        {
                            post.map(post=><div>{`Size_Dimensions: ${post.Size_Dimension_Weight}`}</div>)
                        }
                        <br/>
                        {
                            post.map(post=><div>{`Provenance: ${post.Provenance}`}</div>)
                        }
                        <br/>
                        {
                            post.map(post=><div>{`Cross_referances: ${post.Cross_references}`}</div>)
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

    </div>
  )
}
