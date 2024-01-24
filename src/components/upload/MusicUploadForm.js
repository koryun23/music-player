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
    const [errorMessages, setErrorMessages] = useState([]);
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
        setTimeout(() => {
            enteredFileName = enteredFileName.slice(enteredFileName.lastIndexOf("\\") + 1);
            let format = enteredFileName.slice(enteredFileName.lastIndexOf("."));
            if(format !== ".mp3" && format !== ".wav") {
                setErrorMessages([`Unsupported file type(${format}): only .mp3 and .wav are supported.`]);
            }
            setFileName(enteredFileName);
            setErrorMessages([]);
            props.onUploadSong(event);
            setUploadIndicator(false)
        }, 2000)
        setUploadIndicator(true);
    }

    const addSongToPlaylist = (event) => {
        props.onAddSongToPlaylist(event, songName, artistName, fileName);
        setSongName("");
        setArtistName("");
        setFileName("");
    }

    // useEffect(() => {
    //     if(fileName){
    //         setUploadIndicator(true);
    //         setTimeout(() => setUploadIndicator(false), 1000);
    //     }
    // }, [fileName])

    return (
        <form className="music-upload-form">
            <div className="form form-group">
                {
                    errorMessages.length > 0 && <small className="error">{errorMessages[0]}</small>
                }
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