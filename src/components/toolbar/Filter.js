import React from "react";
import "../../css/toolbar/Toolbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Filter(props) {

    const [inputWord, setInputWord] = useState("");

    const onInputWordChange = (event) => {
        setInputWord(event.target.value);
        props.onFilter(event.target.value);
    }

    return (
        <form className="dropdown-div">
            <div className="form form-group">
                <input type="text" 
                       className="filter-input-field" 
                       placeholder="Filter" 
                       value={inputWord}
                       onChange={(event) => onInputWordChange(event)}/>
            </div>
        </form>
    );
}