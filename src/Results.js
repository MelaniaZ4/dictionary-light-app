import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {

    if (props.results){
        console.log(props.results);
    return (
        <div>
            <h2>
                {props.results.word}
            </h2>
            <h3>
                {props.results.phonetics[0].text}
            </h3> 
                {props.results.meanings.map(function(meaning, index){
                return (
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>
                );
               })}
           </div>
    );
    } else { 
    return null
    }
}