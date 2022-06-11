import React,{useEffect, useState} from "react";
import { variables } from "../../firebase/Variables";
import '../../assets/styles/mainCard.css'
import styles from "../../assets/style_modules/MobileNav.module.css";
import card_styles from "../../assets/style_modules/MobileCard.module.css";

export default function MobileCard() {

    const [flip, setFlip] = useState(false);

    function flipCard() {
        setFlip(!flip)

        if(flip){console.log("Front");}
        else{console.log("Back");}
    }

    const queryParams = new URLSearchParams(window.location.search);
    //const id = queryParams.get('id');
    const id = 10;
    

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
                    post.map(post => <img src={post.Image_url} className='image'/>) 
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
