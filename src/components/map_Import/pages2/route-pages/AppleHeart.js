import React,{useEffect, useState} from "react";
import { variables } from "../../../../firebase/Variables.js";

const AppleHeart = ()=> {

    const id = 6;

    const [post,setPosts]=useState([])
    useEffect(()=> {
        fetch(variables.API_URL+'item'+'/'+ parseInt(id))
        .then(response=>response.json())
        .then(resp=>setPosts(resp))

    },[])

    return(
        <div className="" data-space="1.01" data-category="1">
            <h3 className="content__item-title">Test 1</h3>
            <div className="content__item-details">
                {/* <p className="content__meta">
                    <span className="content__meta-item"><strong>Opening Hours:</strong> 6:30AM &mdash; 11:30PM</span> 
                    <span className="content__meta-item"><strong>Phone:</strong> (0) 66 5738902</span>
                </p>
                <p className="content__desc">Burdock celery - salsify, tomatillo. Bitter gourd horseradish leaves radicchio, celeriac miner's lettuce kurrat arugula fluted pumpkin turnip, arracacha water spinach nopal.</p> */}
                <div className="ByID">
                    {
                    post.map(post => <img src={post.Image_url}/>) 
                    }
                    {
                        post.map(post=><div><p>{`${post.Item_narrative}. ${post.Item_type}`}</p></div>)
                    }
                </div>
            </div>
        </div>
    )
}
export default AppleHeart;