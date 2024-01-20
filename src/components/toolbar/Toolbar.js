import React from "react";
import "../../css/toolbar/Toolbar.css";
import PlayAll from "./PlayAll";
import AddAll from "./AddAll";
import TrackNumber from "./TrackNumber";
import Filter from "./Filter";

export default function Toolbar(props) {
    
    return (
        <div className="toolbar">
            <PlayAll />
            <AddAll />
            <TrackNumber />
            <Filter />
        </div>
    );
}