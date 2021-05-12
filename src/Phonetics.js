import React from "react";

export default function Phonetics(props){
return (
    <div>
        {props.phonetics.text}
        {" "}
        <a href={props.phonetics.audio}
        target="_blank"
        rel="noreferrer">
            ▶ Listen
        </a>
    </div>
)
}