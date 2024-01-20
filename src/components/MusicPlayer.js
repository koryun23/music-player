import React from "react";
import "../css/MusicPlayer.css";
import Toolbar from "./toolbar/Toolbar";
import SongList from "./songs/SongList";
import MusicUploadForm from "./upload/MusicUploadForm";

export default function MusicPlayer(props) {
    
    return (
        <div className="music-player"> 
             <Toolbar />
             <SongList />
             <MusicUploadForm />
        </div>
    );

}
