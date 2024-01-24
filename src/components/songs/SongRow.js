import { React, useState} from "react";
import "../../css/songs/SongList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCheck, faForward, faGrip, faHeart, faPause, faPlay, faReply, faShare } from "@fortawesome/free-solid-svg-icons";
import { Button, ButtonGroup } from "react-bootstrap";

export default function SongRow(props) {

    const [songName, setSongName] = useState(props.songName);
    const [artistName, setArtistName] = useState(props.artistName);
    const [trackNumber, setTrackNumber] = useState(props.trackNumber);
    const [fileName, setFileName] = useState(props.fileName);

    return (
        <div className="song-row">
            <div className="song-play-and-move col">
                <button className="dots">
                    <FontAwesomeIcon icon={faGrip}/>
                </button>
                <button className="play" onClick={() => props.onPlaySingle(fileName)}>
                    {
                        (props.isPlaying && <FontAwesomeIcon icon={faPause}/>) ||
                        (<FontAwesomeIcon icon={faPlay}/>)
                    }
                </button>
            </div>
            <div className="song-name col col-md-10 col-xs-6">
                {props.songName}
            </div>
            <div className="artist-name col col-md-10 col-xs-6">
                {props.artistName}
            </div>
            <div className="track-number col col-md-5 col-xs-3">
                {props.trackNumber}
            </div>
            <div className="additional-options col col-md-5 col-xs-3">
                <button className="option">
                    <FontAwesomeIcon icon={faHeart}/>
                </button>
                <button className="option">
                    <FontAwesomeIcon icon={faCheck}/>
                </button>
                <button className="option">
                    <FontAwesomeIcon icon={faShare}/>
                </button>
                <button className="option">
                    <FontAwesomeIcon icon={faCaretDown} />
                </button>
            </div>
        </div>
    );
} 