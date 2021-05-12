import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {

    if (props.results){
    return (
        <div>
            <section>
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
            </section>
                {props.results.meanings.map(function(meaning, index){
                return (
                    <section key={index}>
                        <Meaning meaning={meaning} />
                    </section>
                );
               })}
           </div>
    );
    } else { 
    return null
    }
}