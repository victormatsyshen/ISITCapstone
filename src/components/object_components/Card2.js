import React,{useEffect, useState} from "react";
import { variables } from "../../firebase/Variables";
import '../../assets/styles/swipe.css'
import testguitars from '../../assets/images/testpic.png'
import styles from "../../assets/style_modules/Nav.module.css";

export default function Swipe() {

    const [flip, setFlip] = useState(false);

    function flipCard() {
        setFlip(!flip)

        if(flip){console.log("Front");}
        else{console.log("Back");}
    }

    const queryParams = new URLSearchParams(window.location.search);
    // const id = queryParams.get('id');
    const id = 1;
    

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
                    <img src={testguitars} className='image'></img>
                </div>

                <div className='cardHeader'>
                    <div className='headerInfo'>
                        Guitar Image
                    </div>
                </div>
    
                <div className='cardFooter'>
                    <div className='footerInfo'> 
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                    </div>
                </div>
                
            </div>

            <div className="back" onClick={flipCard}>
               <h2>This is the back</h2>

                <div className="ByID">
                    {
                    post.map(post => <img src={post.Image_url}/>) 
                    }
                    {
                        post.map(post=><div><p>{` ${post.Item_narrative}. ${post.Item_type}`}</p></div>)
                    }
                    
                </div>

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
