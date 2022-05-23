import "./Images.css"
import React,{useState, useEffect} from "react";
import {storage} from "./firebase";
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";


function Images(){
    const [imageUpload, setImageUpload] = useState(null)
    const [imageList, setImageList] = useState([]);

    const imageListRef = ref(storage, "images/")
    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then(() => {
            alert("Image Uploaded")
        });

    };

    useEffect(() => {
        listAll(imageListRef).then((response) =>{
            response.items.forEach((item)=> {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url]);
                });
            });
        });
    }, []);

    return (
        <div className="Images">
            <input type="file" onChange={(event) => {
                setImageUpload(event.target.files[0]);
            }}/>
            <button onClick={uploadImage}>Upload Image</button>

            {imageList.map((url) => {
                return<img src={url}/>
            })}

            <img src="https://firebasestorage.googleapis.com/v0/b/react-example-photos.appspot.com/o/images%2FAutobots-Logo%20Icon.png?alt=media&token=5bcfa9b8-1322-4951-9da2-5cdabf3f7b0f"/>
        </div>
    );
}

export default Images;