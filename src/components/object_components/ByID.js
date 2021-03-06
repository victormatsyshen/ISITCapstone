import React,{useEffect, useState} from "react";
import { variables } from "./Variables";
 
function ByID(){
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
    

    const [post,setPosts]=useState([])


    useEffect(()=> {
        fetch(variables.API_URL+'item'+'/'+ parseInt(id))
        .then(response=>response.json())
        .then(resp=>setPosts(resp))

    },[])
    return (
        <div className="ByID">
            {
               post.map(post => <img src={post.Image_url1}/>) 
            }
            {
                post.map(post=><div><p>{` ${post.Item_narrative}. ${post.Item_type}`}</p></div>)
            }
            
        </div>
    )
}

export default ByID;