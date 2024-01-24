import React from "react";
import "../css/alerts.css";

export default function Error(props) {
    return (
        <div className="error">
            <p className="error-message"><b>{props.errorMessage}</b></p>
        </div>
    );
}