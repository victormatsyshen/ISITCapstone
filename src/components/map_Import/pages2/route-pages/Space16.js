import React,{useEffect, useState} from "react";
import { variables } from "../../../../firebase/Variables.js";

const Space16 = ()=> {

    const id = 3;
    const [post,setPosts]=useState([])
    useEffect(()=> {
        fetch(variables.API_URL+'item'+'/'+ parseInt(id))
        .then(response=>response.json())
        .then(resp=>setPosts(resp))

    },[])

    return(
        <div className="" data-space="1.01" data-category="1">
            <h3 className="content__item-title">
            {
              post.map(post=><div>{`${post.Item_name}`}</div>)
            }
            </h3>

            <div className="content_item_wrapper">

              <div className="content_item_image">
              {
                post.map(post => <img src={post.Image_url1}/>) 
              }
              </div>

              <div className="content_item_text">
              {
                post.map(post=><div><p>{`${post.Item_narrative}. ${post.Item_type}`}</p></div>)
              }
              </div>
            </div>
            
            
        </div>
    )
}
export default Space16;