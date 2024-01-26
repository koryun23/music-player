import renderer from "react-test-renderer"
import MusicPlayer from "../components/MusicPlayer";

it('renders correctly', () => {
    const tree = renderer.create(<MusicPlayer />).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
})
