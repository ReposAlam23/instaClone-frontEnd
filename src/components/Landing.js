import React from "react"
import { Link } from "react-router-dom"
import "./Landing.css"

const Landing = ()=>{

    return <>
    <div className="landingPage">
        <img src={require(`../Images/landing.png`)} alt="landingImage" />
        <div className="headingAndbutton">
            <h1 className="heading">10x Team 04</h1>  
            <Link to="Showpost">
                <button>Enter</button>
            </Link> 
        </div>
    </div>
    </>
}
export default Landing