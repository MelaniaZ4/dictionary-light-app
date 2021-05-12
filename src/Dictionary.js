import axios from "axios";
import React, { useState } from "react";
import Results from "./Results"
import "./Dictionary";

export default function Dictionary(){
    let [keyword, setkeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function handleKeywordValue(event){
        setkeyword(event.target.value);
    }

    function Search(event){
        event.preventDefault();
        setkeyword();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);
        
    }

return(
    <div className="dictionary">
        <section className="inputSection">
        <form 
        onSubmit={Search}>
            <input 
            type="search" 
            autoFocus={true} 
            placeholder="Type a word" 
            className="search-bar" 
            onChange={handleKeywordValue}
            ></input>
        </form>
        </section>
        <Results results={results}/>
    </div>
);
}