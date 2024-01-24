import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function MusicUploadIndicator(props) {

    return (props.uploadIndicator && <FontAwesomeIcon icon={faSpinner} size="xl" spin />)
    
    

}