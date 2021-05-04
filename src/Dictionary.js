import React, { useState } from "react";
import "./Dictionary";

export default function Dictionary(){
    let [keyword, setkeyword] = useState("");

    function handleKeywordValue(event){
        setkeyword(event.target.value);
    }


    function Search(event){
        event.preventDefault();
        alert(`Searching for "${keyword}"`);
        setkeyword();
    }

return(
    <div>
        <form onSubmit={Search}>
            <input type="search" autoFocus={true} placeholder="Type a word" className="search-bar" onChange={handleKeywordValue}></input>
        </form>
    </div>
);}