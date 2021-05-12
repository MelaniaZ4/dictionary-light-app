import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {

    return(
        <div className="Meaning">
            <h3>
                {props.meaning.partOfSpeech}
            </h3>
                {props.meaning.definitions.map(function(definition, index) {
                    return (
                        <div key={index}> 
                            
                                {definition.definition}
                           
                            
                                <em>{definition.example}</em>
                        
                            
                                <Synonyms synonyms={definition.synonyms}/>
                          
                        </div>
                    );
                })}
            
        </div>
    );
}