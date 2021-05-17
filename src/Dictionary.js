import axios from "axios";
import React, { useState } from "react";
import Results from "./Results"
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setkeyword] = useState("sunset");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function handleKeywordValue(event){
        setkeyword(event.target.value);
    }

    function search(){
        setkeyword();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function load(){
        setLoaded(true);
        search();
    }

    if(loaded){
return(
    <div className="dictionary">
        <section className="inputSection">
        <form 
        onSubmit={handleSubmit}>
            <input 
            type="search" 
            autoFocus={true} 
            placeholder="Type a word" 
            className="search-bar"
            defaultValue="sunset"
            onChange={handleKeywordValue}
            ></input>
        </form>
        </section>
        <Results results={results}/>
    </div>
);
} else {
    load();
    return "Loading...";
}
}