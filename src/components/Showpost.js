import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import "./Postview.css"
import Card from "./Card"

const Showpost = ()=>{

    const [serverResponse, setServerResponse] = useState(null)

    const AllPost = async ()=>{
        const show = await fetch("https://instaclone-gr1u.onrender.com/all")
        setServerResponse(await show.json())
    }

    useEffect(()=>{
        AllPost()        
    }, [])

    if(serverResponse == null){
        return <h2>Loading...</h2>
    }

    return <>

        {/* NAVBAR SECTION */}

        <nav className="navbar">
            <div>
                <img src={require("../Images/instaclone-logo.PNG")} alt="instaLogo" />
            </div>
            <div className="camera-icon-div">
                <Link to="Postupload" >
                    <img className="camera-icon" src={require("../Images/camera-icon.jpg")} alt="camera-logo" />
                </Link>
            </div>
        </nav>

        {/* POST SHOWING */}
        <div>
            {serverResponse.result?.map((post, idx)=>{
                return <Card prop={post} key={idx} />
            })}
        </div>
    
    </>
}
export default Showpost