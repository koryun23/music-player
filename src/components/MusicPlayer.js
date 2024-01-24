import React, { useEffect } from "react";
import "../css/MusicPlayer.css";
import Toolbar from "./toolbar/Toolbar";
import SongList from "./songs/SongList";
import MusicUploadForm from "./upload/MusicUploadForm";
import { useState } from "react";
import { upload } from "@testing-library/user-event/dist/upload";
import Error from "./Error";
import Success from "./Success";
var currentAudio = null;

export default function MusicPlayer(props) {
    
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const [songList, setSongList] = useState([]);
    const [currentQueue, setCurrentQueue] = useState([]);
    
    const [currentSong, setCurrentSong] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);

    const onPlayAll = (event, mode) => {
        event.preventDefault();
        if(currentQueue.length == 0) {
            onError("There are no songs currently in a queue. Consider adding songs to a queue");
            removeError();
            return;
        }
        let filesToPlay = [];
        console.log(uploadedFiles);
        for(let i = 0; i < uploadedFiles.length; i++) {
            for(let j = 0; j < currentQueue.length; j++) {
                let currentFileName = currentQueue[j].fileName;
                if(uploadedFiles[i].name === currentFileName) {
                    filesToPlay.push(uploadedFiles[i]);
                }
            }
        }
        console.log(filesToPlay);
        if(mode === "once") {
            playAllOnce(filesToPlay, () => console.log(filesToPlay))
        } else if(mode === "repeat") {
            playAllRepeat(filesToPlay, () => console.log(filesToPlay))
        }
    };

    const playAllOnce = (files, cb) => {
        cb();
        for(let i = 0; i < files.length; i++) {
            onPlaySingle(files[0].name);
            while(!currentAudio.ended){}
            setIsPlaying(false);
            currentAudio.pause();
            files.unshift();
            setCurrentSong("")
        }
    }

    const playAllRepeat = (files, cb) => {
        cb();
        for(let i = 0; i < files.length; i++) {
            currentAudio = new Audio(URL.createObjectURL(files[i]));
            currentAudio.play();
            onPlaySingle(files[0].name);
            while(!currentAudio.ended) {}
            setIsPlaying(false);
            currentAudio.pause();
            setCurrentSong("");
            if(i == files.length - 1) {
                i = -1;
            }
        }
    }
    
    const [playMode, setPlayMode] = useState("once"); // once, repeat
    const onChangePlayMode = () => {};

    const onAddAll = (event, mode) => {
        event.preventDefault();
        setAddMode(mode);
        console.log(mode);
        if(mode === "sequential") {
            addAllSequential(() => console.log(currentQueue));
        } else if(mode === "shuffled"){
            addAllShuffled(() => console.log(currentQueue));
        }
    };

    const addAllSequential = (cb) => {
        let queue = songList.map(song => song);
        setCurrentQueue(queue);
        cb();
    }

    const addAllShuffled = () => {
        let array = songList.map(song => song);
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        setCurrentQueue(array);
        console.log(array);
    }

    const [addMode, setAddMode] = useState("sequential") // sequential, shuffle
    const onChangeAddMode = (newMode) => {
        setAddMode(addMode)
    };

    const onFilter = () => {}

    const onAddSongToPlaylist = (event, songName, artistName, fileName) => {
        event.preventDefault();
        let songListTemp = songList.map(song => song);
        console.log(songListTemp);
        let trackNumber = songListTemp.length + 1;
        let newSong = {
            songName: songName, artistName: artistName, trackNumber: trackNumber, fileName: fileName
        };
        for(let i = 0; i < songListTemp.length; i++) {
            if(songListTemp[i].songName === songName) {
                onError(`There already exists a song named '${songName}' in your playlist: please specify another name`)
                removeError();
                return;
            }
            if(songListTemp[i].fileName === fileName) {
                onError(`There already exists a song imported from the specified file`)
                removeError();
                return;
            }
        }
        songListTemp.push(newSong);
        setSongList(songListTemp);
    }

    const onPlaySingle = (fileName) => {
        if(currentSong === fileName) {
            if(currentAudio.paused){
                currentAudio.play();
                setIsPlaying(true);
            } else {
                currentAudio.pause();
                setIsPlaying(false);
            }
        } else {
            if(currentAudio) {
                currentAudio.pause();
            }
            setIsPlaying(false);
            for(let i = 0; i < uploadedFiles.length; i++) {
                console.log(uploadedFiles[i]);
                if(uploadedFiles[i].name.includes(fileName)) {
                    currentAudio = new Audio(URL.createObjectURL(uploadedFiles[i]));
                    currentAudio.play();
                    setIsPlaying(true);
                    setCurrentSong(fileName);
                    return;
                }
            }
        }

    }

    const onUploadSong = (event) => {
        if(currentAudio) {
            currentAudio.pause();
            setIsPlaying(false);
        }
        const lastUploadedFile = event.target.files[event.target.files.length - 1];
        pushNewFile(lastUploadedFile);
    }

    const pushNewFile = (lastUploadedFile) => {
        let uploadedFilesTemp = uploadedFiles.map(file => file);
        uploadedFilesTemp.push(lastUploadedFile);
        setUploadedFiles(uploadedFilesTemp);
    }

    const onError = (message) => {
        setError(message);
    }

    const removeError = () => {
        setTimeout(() => {
            setError("")
        }, 6000)
    }

    const [error, setError] = useState();
    //const [successes, setSuccesses] = useState([]);

    return (
        <div className="music-player"> 
            {
                error && <Error errorMessage={error}/>
            }
            
             <Toolbar onPlayAll={(event, mode) => onPlayAll(event, mode)} 
                      playMode={playMode} 
                      onChangePlayMode={onChangePlayMode} 
                      onAddAll={(event, mode) => onAddAll(event, mode)}
                      onChangeAddMode={onChangeAddMode} 
                      onFilter={onFilter} />
             <SongList songList={songList} 
                       currentQueue={currentQueue} 
                       onPlaySingle={(fileName) => onPlaySingle(fileName)} 
                       fileName={currentSong}
                       isPlaying={isPlaying}/>
             <MusicUploadForm onAddSongToPlaylist={(event, songName, artistName, fileName) => onAddSongToPlaylist(event, songName, artistName, fileName)}
                              onUploadSong={onUploadSong} 
                              onError={(message) => onError(message)}
                              removeError={removeError}
                              />
        </div>
    );

}
