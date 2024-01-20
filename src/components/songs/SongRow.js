import { React, useState} from "react";
import "../../css/songs/SongList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCheck, faForward, faGrip, faHeart, faPlay, faReply, faShare } from "@fortawesome/free-solid-svg-icons";

export default function SongRow(props) {

    const [songName, setSongName] = useState(props.songName);
    const [artistName, setArtistName] = useState(props.artistName);
    const [trackNumber, setTrackNumber] = useState(props.trackNumber);

    return (
        <div className="song-row">
            <div className="song-play-and-move col">
                <button className="dots">
                    <FontAwesomeIcon icon={faGrip}/>
                </button>
                <button className="play">
                    <FontAwesomeIcon icon={faPlay}/>
                </button>
            </div>
            <div className="song-name col">
                {props.songName}
            </div>
            <div className="artist-name col">
                {props.artistName}
            </div>
            <div className="track-number col">
                {props.trackNumber}
            </div>
            <div className="additional-options col">
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