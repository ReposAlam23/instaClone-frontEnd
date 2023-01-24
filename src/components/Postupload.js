import React, { useState } from "react";
import "./Postview.css"
import "./Postupload.css"

import { useNavigate } from "react-router-dom";


const Postupload=()=>{
    const navigate = useNavigate();
 
    const [imagefile, setImageFile] = useState("")
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")

    const UploadFunction=()=>{
        const formdata = new FormData()
        formdata.append("name", name)
        formdata.append("location", location)
        formdata.append("description", description)
        formdata.append("imagefile", imagefile)
        
        fetch("https://instaclone-gr1u.onrender.com/post", {
            method: "POST",
            body: formdata
        })
        try {
            navigate("/ShowPost"); // Omit optional second argument
        } catch (error) {
            navigate("/error", { state: { message: "Failed to submit post" } }); // Pass optional second argument
        }
    }
    return <>
    {/* NAV BAR  */}
    
     <nav className="navbar">
            <div>
                <img src={require("../Images/instaclone-logo.PNG")} alt="instaLogo" />
            </div>
            <div className="camera-icon-div">      
                    <img className="camera-icon" src={require("../Images/camera-icon.jpg")} alt="camera-logo" />    
            </div>
    </nav>

    {/* NOW THE MAIN FILE AND DATA INPUT FORM */}

    <div className="main-post">
      
        <div className="choose-file">
            <input type="file" onChange={(e)=>{setImageFile(e.target.files[0])}} />
        </div>
        <div className="name-location">
            <input type="text" className="name" placeholder="Author" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="text" className="location" placeholder="Location" value={location} onChange={(e)=>setLocation(e.target.value)} />
        </div>
        <div >
            <input className="description" type="text" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} />
        </div>
 
        <button className="submit-button" onClick={UploadFunction}>Post</button>

    </div>

    </>
}
export default Postupload