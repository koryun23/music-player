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

    const row = (
        <tr>
            <th scope="row">
                <button className="dots">
                    <FontAwesomeIcon icon={faGrip}/>
                </button>
                <button className="play" onClick={() => props.onPlaySingle(fileName)}>
                    {
                        (props.isPlaying && <FontAwesomeIcon icon={faPause}/>) ||
                        (<FontAwesomeIcon icon={faPlay}/>)
                    }
                </button>
            </th>
            <td>
                {props.songName}
            </td>
            <td>
                {props.artistName}
            </td>
            <td>
                {props.trackNumber}
            </td>
            <td>
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
            </td>
        </tr>
    );
    return row;
} 