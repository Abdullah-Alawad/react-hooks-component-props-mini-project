import React from "react";

function About({imgs = "https://via.placeholder.com/215" , about}){
    return(
    <aside>
        <img src={imgs} alt='blog logo'/>
        <p>{about}</p>
    </aside>
)}

export default About;