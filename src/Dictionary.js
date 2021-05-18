import axios from "axios";
import React, { useState } from "react";
import Results from "./Results"
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary(){
    let [keyword, setkeyword] = useState("sunset");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }

    function handleKeywordValue(event){
        setkeyword(event.target.value);
    }

    function handlePexelsResponse (response){
        setPhotos(response.data.photos)
    }

    function search(){
        setkeyword();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey = "563492ad6f91700001000001880388d6c6be4d92a1e8f3f9fee26a84";
        let header = { Authorization: `Bearer ${pexelsApiKey}`}
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`
        axios.get(pexelsApiUrl, { headers: header}).then(handlePexelsResponse);
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
        <section>
            <Photos photos={photos}/>
        </section>
    </div>
);
} else {
    load();
    return "Loading...";
}
}