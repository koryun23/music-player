import "../../css/songs/SongList.css";
import { React, useState } from "react";
import SongRow from "./SongRow";
export default function SongList(props) {

    const [songList, setSongList] = useState([
        {songName: "Halo", artistName: "Blackbird Blackbird", trackNumber: 1},
        {songName: "Halo", artistName: "Blackbird Blackbird", trackNumber: 2},
        {songName: "Halo", artistName: "Blackbird Blackbird", trackNumber: 3},
        {songName: "Halo", artistName: "Blackbird Blackbird", trackNumber: 4},
        {songName: "Halo", artistName: "Blackbird Blackbird", trackNumber: 5},
        {songName: "Halo", artistName: "Blackbird Blackbird", trackNumber: 6},
        {songName: "Halo", artistName: "Blackbird Blackbird", trackNumber: 7}
    ]);
    
    return (
        <div className="song-list">
            <div className="top-row">
                <div className="top-col"></div>
                <div className="top-col">Song Name</div>
                <div className="top-col">Artist Name</div>
                <div className="top-col">Track</div>
                <div className="top-col"></div>
            </div>
            {songList.map(song => (
                <SongRow songName={song.songName}
                         artistName={song.artistName} 
                         trackNumber={song.trackNumber} />
            ))}
        </div>
    );
}