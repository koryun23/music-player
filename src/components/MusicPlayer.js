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
    const [favoriteSongList, setFavoriteSongList] = useState([]);

    const [currentQueue, setCurrentQueue] = useState([]);
    
    const [filteredSongList, setFilteredSongList] = useState([]);

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
    }

    const playAllRepeat = (files, cb) => {
        cb();
    }
    
    const onAddAll = (event, mode) => {
        event.preventDefault();
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

    const onFilter = (inputWord) => {
        console.log(inputWord);
        if(!inputWord) {
            setFilteredSongList(songList);
            return;
        }
        let temp = songList.filter(song => (
            song.songName.toLowerCase().includes(inputWord.toLowerCase()) || song.artistName.toLowerCase().includes(inputWord.toLowerCase())
        ));
        console.log(temp);
        setFilteredSongList(temp);
    }

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

    const onAddToFavorites = (songName) => {
        let tempFavorites = favoriteSongList.map(song => song);
        let tempAllSongs = songList.map(song => song);

        for(let i = 0; i < tempAllSongs.length; i++) {
            if(songName === tempAllSongs[i].songName) {
                tempFavorites.push(tempAllSongs[i]);
                break;
            }
        }
        setFavoriteSongList(tempFavorites);
    }

    const onRemoveFromFavorites = (songName) => {
        let tempFavorites = favoriteSongList.map(song => song);
        let index = -1;
        for(let i = 0; i < tempFavorites.length; i++) {
            if(tempFavorites[i].songName === songName) {
                index = i;
                break;
            }
        }
        tempFavorites.splice(index, 1);
        setFavoriteSongList(tempFavorites)
    }

    const onStopPlaying = (fileName) => {
        console.log(fileName);
        console.log(currentSong)
        if(!currentAudio) return;
        if(fileName !== currentSong) return;
        currentAudio.pause();
        setIsPlaying(false);
        setCurrentSong(false);
        currentAudio = null;
    }

    const onPlayNextSong = (fileName) => {
        console.log(fileName);
        console.log(currentSong);
        if(!currentAudio) return;
        if(currentSong !== fileName) return;
        if(songList.length <= 1) return;
        let tempUploadedFiles = uploadedFiles.map(file => file);
        let fileToPlay = "";
        for(let i = 0; i < tempUploadedFiles.length; i++) {
            let currentFile = tempUploadedFiles[i];
            if(currentFile.name == fileName) {
                if(i == tempUploadedFiles.length - 1) { // current song is the last one on the playlist
                    fileToPlay = tempUploadedFiles[0];
                } else {
                    fileToPlay = tempUploadedFiles[i + 1];
                }
                break;
            }
        }
        setIsPlaying(false);
        setCurrentSong("");
        currentAudio.pause();
        currentAudio = new Audio(URL.createObjectURL(fileToPlay));
        currentAudio.play();
        setIsPlaying(true);
        setCurrentSong(fileToPlay.name);

    }

    const onPlaySingle = (fileName) => {
        console.log(currentSong, fileName);
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
                    currentAudio.onended = () => {
                        setCurrentSong("")
                        setIsPlaying(false);
                        console.log("ENDED");
                    }
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

    useEffect(() => {
        setFilteredSongList(songList);
    }, [songList]);

    return (
        <div className="music-player"> 
            {
                error && <Error errorMessage={error}/>
            }
            
             <Toolbar onPlayAll={(event, mode) => onPlayAll(event, mode)} 
                      onAddAll={(event, mode) => onAddAll(event, mode)}
                      onFilter={onFilter} />
             <SongList songList={filteredSongList} 
                       currentQueue={currentQueue} 
                       onPlaySingle={(fileName) => onPlaySingle(fileName)} 
                       fileName={currentSong}
                       isPlaying={isPlaying} 
                       favoriteSongList={favoriteSongList.map(song => song.songName)}
                       onAddToFavorites={(songName) => onAddToFavorites(songName)} 
                       onRemoveFromFavorites={(songName) => onRemoveFromFavorites(songName)}
                       onStopPlaying={(fileName) => onStopPlaying(fileName)} 
                       onPlayNextSong={(fileName) => onPlayNextSong(fileName)} />
             <MusicUploadForm onAddSongToPlaylist={(event, songName, artistName, fileName) => onAddSongToPlaylist(event, songName, artistName, fileName)}
                              onUploadSong={onUploadSong} 
                              onError={(message) => onError(message)}
                              removeError={removeError}
                              />
        </div>
    );

}
