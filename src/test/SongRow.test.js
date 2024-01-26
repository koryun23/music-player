import renderer from "react-test-renderer";
import SongRow from "../components/songs/SongRow";

it('song row renders correctly', () => {

    const tree = renderer.create(<SongRow />).toJSON();
    expect(tree).toMatchSnapshot();
})