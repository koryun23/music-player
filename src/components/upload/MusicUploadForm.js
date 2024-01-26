import React, { useState } from "react";
import "../../css/upload/MusicUploadForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import MusicUploadButton from "./MusicUploadButton";
import MusicUploadIndicator from "./MusicUploadIndicator";
import { useEffect } from "react";
export default function MusicUploadForm(props) {

    const [fileName, setFileName] = useState("");
    const [songName, setSongName] = useState("");
    const [artistName, setArtistName] = useState("");
    const [uploadIndicator, setUploadIndicator] = useState(false);
    const changeSongName = (event) => {
        setSongName(event.target.value);
    }

    const changeArtistName = (event) => {
        setArtistName(event.target.value);
    }

    const changeSelectedFile = (event) => {
        console.log(event.target.files);
        let enteredFileName = event.target.value;
        enteredFileName = enteredFileName.slice(enteredFileName.lastIndexOf("\\") + 1);
        let format = enteredFileName.slice(enteredFileName.lastIndexOf("."));
        if(format !== ".mp3" && format !== ".wav") {
            props.onError(`Cannot accept a ${format} file: Only accepting .mp3 and .wav files`);
            props.removeError()
            setSongName("");
            setArtistName("");
            setUploadIndicator(false);
            return;
        }
        setFileName(enteredFileName);
        props.onUploadSong(event);
    }

    const addSongToPlaylist = (event) => {
        event.preventDefault();
        console.log("Adding a song to the playlist");
        if(!fileName) {
            props.onError("Please upload the song");
            props.removeError();
            return;
        }
        if(!songName) {
            props.onError("Please specify the name of the song");
            props.removeError();
            return;
        }
        if(!artistName) {
            props.onError("Please specify the artist");
            props.removeError();
            return;
        }
        setTimeout(() => {
            props.onAddSongToPlaylist(event, songName, artistName, fileName);
            
            setSongName("");
            setArtistName("");
            setFileName("");
            setUploadIndicator(false);
        }, 500);
        setUploadIndicator(true);
    }

    return (
        <form className="music-upload-form">
            <div className="form form-group">
                <input type="text" 
                       name="fileName" 
                       placeholder="No File Selected" 
                       className="file-name" 
                       value={fileName}
                       readOnly />
                <small>Supported file formats: .mp3, .wav</small>

            </div>
            <div className="form form-group">
                <input type="text" 
                       name="songName" 
                       placeholder="Song Name" 
                       className="song-name" 
                       onChange={changeSongName}
                       value={songName} />
            </div>
            <div className="form form-group">
                <input type="text" 
                       name="artistName" 
                       placeholder="Artist Name" 
                       className="artist-name" 
                       onChange={changeArtistName}
                       value={artistName}/>
            </div>
            <div className="form form-group">
                <input type="file"
                       name="submit"
                       className="btn btn-submit" 
                       onChange={(event) => changeSelectedFile(event)}/>
                <MusicUploadButton onAddSongToPlaylist={addSongToPlaylist}/>
                <MusicUploadIndicator uploadIndicator={uploadIndicator}/>
            </div>
        </form>

    );
}