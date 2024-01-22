import "../../css/songs/SongList.css";
import { React, useState } from "react";
import SongRow from "./SongRow";
export default function SongList(props) {
    
    return (
        <div className="song-list">
            <div className="top-row">
                <div className="top-col"></div>
                <div className="top-col">Song Name</div>
                <div className="top-col">Artist Name</div>
                <div className="top-col">Track</div>
                <div className="top-col"></div>
            </div>
            {props.songList.map(song => (
                <SongRow songName={song.songName}
                         artistName={song.artistName} 
                         trackNumber={song.trackNumber} 
                         fileName={song.fileName}
                         onPlaySingle={(fileName) => props.onPlaySingle(fileName)}
                         isPlaying={props.isPlaying && props.fileName == song.fileName}/>
            ))}
        </div>
    );
}