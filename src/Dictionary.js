import axios from "axios";
import React, { useState } from "react";
import "./Dictionary";

export default function Dictionary(){
    let [keyword, setkeyword] = useState("");

    function handleResponse(response){
        console.log(response.data[0].word);
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
    <div className="dictionary-wrapper">
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
    </div>
);
}