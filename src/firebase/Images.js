//import "./Images.css"
import React,{useState, useEffect} from "react";
import {storage} from "./Firebase";
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

            <img src="https://firebasestorage.googleapis.com/v0/b/the-crocodile-project-4158c.appspot.com/o/Bandana.jpg?alt=media&token=afbe032e-3546-4468-bf88-3231f71e20a8"/>
            <video src="https://firebasestorage.googleapis.com/v0/b/react-example-photos.appspot.com/o/videos%2F(24)%20Takara%20MP-44%20Optimus%20Prime%20Transformation%20Sequence%20-%20YouTube%20-%20Google%20Chrome%202021-08-17%2014-22-33.mp4?alt=media&token=c3586297-fe5c-4138-bdf5-6d2944e2f1c7"/>
        </div>
    );
}

export default Images;