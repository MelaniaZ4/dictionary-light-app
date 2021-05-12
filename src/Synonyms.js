import React from "react";
import "./Synonyms.css";

export default function Synonyms(props){
    if (props.synonyms) {
        return (
            <div className="synonyms">
                <h5>Synonyms</h5>
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
            );
    } else {
        return null;
    }    
}