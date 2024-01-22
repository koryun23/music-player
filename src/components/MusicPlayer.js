import React, { useEffect } from "react";
import "../css/MusicPlayer.css";
import Toolbar from "./toolbar/Toolbar";
import SongList from "./songs/SongList";
import MusicUploadForm from "./upload/MusicUploadForm";
import { useState } from "react";

export default function MusicPlayer(props) {
    
    const [audioObjects, setAudioObjects] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const [songList, setSongList] = useState([]);
    const [currentQueue, setCurrentQueue] = useState([]);
    

    const onPlayAll = () => {};
    
    const [playMode, setPlayMode] = useState("sequential"); // sequential, shuffle, single
    const onChangePlayMode = () => {};

    const onAddAll = () => {};

    const [addMode, setAddMode] = useState("sequential") // sequential, shuffle
    const onChangeAddMode = () => {};

    const onFilter = () => {}

    const onAddSongToPlaylist = (event, songName, artistName, fileName) => {
        event.preventDefault();
        let songListTemp = songList.map(song => song);
        console.log(songListTemp);
        let trackNumber = songListTemp.length + 1;
        songListTemp.push({
            songName: songName, artistName: artistName, trackNumber: trackNumber, fileName: fileName
        });
        setSongList(songListTemp);
    }

    const onPlaySingle = (fileName) => {
        console.log("playing a single track");
        setCurrentSong(fileName);
        console.log(uploadedFiles);
        console.log(audioObjects);
        for(let i = 0; i < uploadedFiles.length; i++) {
            console.log(uploadedFiles[i]);
            if(uploadedFiles[i].name.includes(fileName)) {
                new Audio(URL.createObjectURL(uploadedFiles[i])).play();
                return;
            }
        }
        console.log(currentSong);
    }

    const [currentSong, setCurrentSong] = useState("");


    const onUploadSong = (event) => {
        const lastUploadedFile = event.target.files[event.target.files.length - 1];
        pushNewFile(lastUploadedFile);
    }

    const pushNewFile = (lastUploadedFile) => {
        let uploadedFilesTemp = uploadedFiles.map(file => file);
        uploadedFilesTemp.push(lastUploadedFile);
        setUploadedFiles(uploadedFilesTemp);
    }

    return (
        <div className="music-player"> 
             <Toolbar onPlayAll={onPlayAll} 
                      playMode={playMode} 
                      onChangePlayMode={onChangePlayMode} 
                      onAddAll={onAddAll}
                      addMode={addMode}
                      onChangeAddMode={onChangeAddMode} 
                      onFilter={onFilter} />
             <SongList songList={songList} 
                       currentQueue={currentQueue} 
                       onPlaySingle={(fileName) => onPlaySingle(fileName)} />
             <MusicUploadForm onAddSongToPlaylist={(event, songName, artistName, fileName) => onAddSongToPlaylist(event, songName, artistName, fileName)}
                              onUploadSong={onUploadSong}/>
        </div>
    );

}
