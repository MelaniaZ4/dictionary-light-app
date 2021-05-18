import React from "react";
import "./Photos.css";

export default function Photos(props){
    if(props.photos){
    return (
        <div className="Photos">
            <div className="row">
            {props.photos.map(function(photo, index){
                return(
                    <div key={index} className="col-4">
                        <a href={photo.src.original}
                        target="_blank"
                        rel="noreferrer">
                            <img src={photo.src.landscape} 
                            alt="newPhoto"
                            className="img-fluid" />
                        </a>
                    </div>
                )
            })}
            </div>
        </div>
    );
    } else {
        return null;
    }
}