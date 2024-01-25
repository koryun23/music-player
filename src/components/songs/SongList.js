import "../../css/songs/SongList.css";
import { React, useState } from "react";
import SongRow from "./SongRow";
export default function SongList(props) {
    
    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Song Name</th>
                    <th scope="col">Artist Name</th>
                    <th scope="col">Track</th>
                    <th scope="col"></th>

                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {props.songList.map(song => (
                    <SongRow songName={song.songName}
                            artistName={song.artistName} 
                            trackNumber={song.trackNumber} 
                            fileName={song.fileName}
                            onPlaySingle={(fileName) => props.onPlaySingle(fileName)}
                            isPlaying={props.isPlaying && props.fileName == song.fileName} 
                            isFavoriteSong={props.favoriteSongList.includes(song.songName)} 
                            onAddToFavorites={() => props.onAddToFavorites(song.songName)}
                            onRemoveFromFavorites={() => props.onRemoveFromFavorites(song.songName)} 
                            onStopPlaying={() => props.onStopPlaying(song.fileName)}
                            onPlayNextSong={() => props.onPlayNextSong(song.fileName)}
                            onRemoveFromPlaylist={() => props.onRemoveFromPlaylist(song.fileName)}
                            onRemoveFromQueue={() => {props.onRemoveFromQueue(song.fileName)}}/>
                ))}
            </tbody>
        </table>
    );
}