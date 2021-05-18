import React from "react";
import "./Synonyms.css";

export default function Synonyms(props){
    if (props.synonyms) {
        return (
            <div>
                <span className="header">Similar: </span>
                <div className="synonyms">
                <ul>
                    {props.synonyms.map(function(synonym, index){
                    return (
                        <li key={index}>
                            {synonym}
                        </li>
                    );
                    })}
                </ul>
                </div>
            </div>
            );
    } else {
        return null;
    }    
}