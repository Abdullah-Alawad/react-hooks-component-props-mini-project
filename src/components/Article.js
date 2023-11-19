import React from "react";

function Article({title, date = "January 1, 1970", preview, minutes}){
    const time = [];//empty array to count how many emajis we need
    const sTime = minutes;// the time needed
    if(minutes < 30){
        for(minutes; minutes>0 ; minutes -= 5){
            time.push("☕️"); 
        }
    }
    if(minutes > 30){
        for(minutes; minutes>0 ; minutes -= 10){
            time.push("🍱"); 
        }
    }
    const emj = time.join();//join the array in one string
    const timeNeeded = emj + ` ${sTime} min read`; //the needed result

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <small>{timeNeeded}</small>
        </article>
    )
}

export default Article;