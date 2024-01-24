import "../../css/songs/SongList.css";
import { React, useState } from "react";
import SongRow from "./SongRow";
export default function SongList(props) {
    
    return (
        <div className="song-list">
            <div className="top-row">
                <div className="top-col col-sm-12 col-xs-6"></div>
                <div className="top-col col-sm-18 col-xs-9">Song Name</div>
                <div className="top-col col-sm-18 col-xs-9">Artist Name</div>
                <div className="top-col col-sm-12 col-xs-6">Track</div>
                <div className="top-col col-sm-12 col-xs-6"></div>
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