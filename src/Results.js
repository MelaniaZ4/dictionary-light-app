import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {

    if (props.results){
        console.log(props.results);
    return (
        <div>
            <h2>
                {props.results.word}
            </h2>
            <h3>
                {props.results.phonetics.map(function(phonetics, index){
                return (
                    <div key={index}>
                        <Phonetics phonetics={phonetics} />
                    </div>
                );
               })}
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