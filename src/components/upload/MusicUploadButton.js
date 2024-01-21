import React from "react";
import "../../css/upload/MusicUploadForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function MusicUploadButton(props) {
    return (
        <button className="music-upload-button">
            <FontAwesomeIcon icon={faPlus} size="lg"/>
        </button>   
    );
}