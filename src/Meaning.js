import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {

    return(
        <div>
            <h3>
                {props.meaning.partOfSpeech}
            </h3>
             <div className="Meaning">
                {props.meaning.definitions.map(function(definition, index) {
                    return (
                        <div key={index}> 
                            <div className="definition"> 
                                {definition.definition}
                            </div>
                           
                            <div className="example">
                                    "{definition.example}"
                            </div>
                            <br />
                            <div className="synonyms"> 
                                <Synonyms synonyms={definition.synonyms}/>
                            </div>
                    </div>
                    );
                })}
            </div>
            
        </div>
    );
}