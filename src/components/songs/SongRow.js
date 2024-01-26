import { React, useState} from "react";
import "../../css/songs/SongList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCheck, faForward, faGrip, faHeart, faPause, faPlay, faReply, faShare, faStop } from "@fortawesome/free-solid-svg-icons";
import { Button, ButtonGroup, Dropdown, DropdownButton, DropdownItem } from "react-bootstrap";

export default function SongRow(props) {

    const row = (
        <tr>
            <th scope="row">
                <button className="play" onClick={() => props.onPlaySingle()}>
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
                <button className="option" onClick={props.isFavoriteSong ? props.onRemoveFromFavorites : props.onAddToFavorites}>
                    <FontAwesomeIcon icon={faHeart} style={props.isFavoriteSong ? {color: "red"} : {}}/>
                </button>
            </td>
            <td>
                <button className="option" onClick={props.onStopPlaying}>
                    <FontAwesomeIcon icon={faStop}/>
                </button>
            </td>
            <td>
                <button className="option" onClick={props.onPlayNextSong}>
                    <FontAwesomeIcon icon={faForward}/>
                </button>
            </td>
        </tr>
    );
    return row;
} 