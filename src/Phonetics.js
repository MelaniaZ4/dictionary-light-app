import React from "react";
import "./Phonetics.css";

export default function Phonetics(props){
return (
    <div>
        
        <span className="phonetics-text">
        {props.phonetics.text}
        </span> 
        <a href={props.phonetics.audio}
        target="_blank"
        rel="noreferrer"
        className="listen">
            ▶ Listen
        </a>
        
    </div>
)
}