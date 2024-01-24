import React from "react";
import "../css/alerts.css";

export default function Success(props) {
    return (
        <div className="success">
            <p className="success-message"><b>{props.successMessage}</b></p>
        </div>
    );
}