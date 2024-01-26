import renderer from "react-test-renderer";
import SongRow from "../components/songs/SongList";
import SongList from "../components/songs/SongList";

it('song list renders correctly', () => {
    const songList = [
        {songName: "aaa", artistName: "bbb", fileName: "ccc", trackNumber: 1},
        {songName: "aaaa", artistName: "bbbb", fileName: "cccc", trackNumber: 2},
        {songName: "aa", artistName: "bb", fileName: "cc", trackNumber: 3},
        {songName: "a", artistName: "b", fileName: "c", trackNumber: 4},

    ]
    const tree = renderer.create(<SongList songList={songList}
                                           favoriteSongList={songList} 
                                          />).toJSON();
    expect(tree).toMatchSnapshot();
})